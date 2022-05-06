/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { fromUnixTime, format } from 'date-fns';

class OpenWeather {
  static limit = 1;

  static part = 'minutely,hourly,alerts';

  static APIkey = process.env.OPEN_WEATHER_KEY;

  static country_code = 'ANSI';

  constructor(city = 'default', units = 'imperial', unitSymbol = 'F', windSpeedUnits = 'mph') {
    this.city = city;
    this.state = '';
    this.units = units;
    this.unitSymbol = unitSymbol;
    this.temp = '';
    this.hi = '';
    this.low = '';
    this.feelsLike = '';
    this.humidity = '';
    this.dewpoint = '';
    this.pressure = '';
    this.UVIndex = '';
    this.windSpeed = '';
    this.windSpeedUnits = windSpeedUnits;
    this.windDirection = '';
    this.sunrise = '';
    this.sunset = '';
    this.day0 = {};
    this.day1 = {};
    this.day2 = {};
    this.day3 = {};
    this.day4 = {};
    this.day5 = {};
    this.day6 = {};
    this.day7 = {};
    this.description = '';
    this.icon = '';
    this.displayTemp = '';
    this.displayHi = '';
    this.displayLow = '';
    this.displayFeelsLike = '';
    this.displayDewpoint = '';
  }

  async oneCallAPICall() {
    const geocodingRequest = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${this.city},${OpenWeather.country_code}&limit=${OpenWeather.limit}&appid=${OpenWeather.APIkey}`,
      { mode: 'cors' },
    );
    const geocodingResponse = await geocodingRequest.json();
    if (geocodingResponse.length === 0) throw new Error('City not Found.');
    const { lat } = geocodingResponse[0];
    const { lon } = geocodingResponse[0];
    this.city = geocodingResponse[0].name;
    this.state = geocodingResponse[0].state;
    const openWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${this.units}&exclude=${OpenWeather.part}&appid=${OpenWeather.APIkey}`,
      { mode: 'cors' },
    );
    const dataResponse = await openWeatherResponse.json();
    this.temp = dataResponse.current.temp;
    this.hi = dataResponse.daily[0].temp.max;
    this.low = dataResponse.daily[0].temp.min;
    this.feelsLike = dataResponse.current.feels_like;
    this.humidity = dataResponse.current.humidity;
    this.dewpoint = dataResponse.current.dew_point;
    this.pressure = dataResponse.current.pressure;
    this.UVIndex = dataResponse.current.uvi;
    this.windSpeed = dataResponse.current.wind_speed;
    this.windDirection = dataResponse.current.wind_deg;
    this.sunrise = dataResponse.current.sunrise;
    this.sunset = dataResponse.current.sunset;
    this.description = dataResponse.current.weather[0].description;
    this.icon = dataResponse.current.weather[0].icon;
    // eslint-disable-next-line operator-linebreak
    [this.day0, this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7] =
      dataResponse.daily;
    this.cleanData();
    return dataResponse;
  }

  cleanData() {
    const hPa_TO_inHg_Conversion_Number = 33.863886666667;

    this.displayTemp = `${`${this.temp}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayHi = `${`${this.hi}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayLow = `${`${this.low}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayFeelsLike = `${`${this.feelsLike}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayDewpoint = `${`${this.dewpoint}`.split('.')[0]}°${this.unitSymbol}`;
    this.humidity = `${this.humidity}%`;
    this.pressure = `${(this.pressure / hPa_TO_inHg_Conversion_Number).toPrecision(4)} inHg`;
    this.windSpeed = `${this.windSpeed} ${this.windSpeedUnits}`;

    const days = [this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7];
    for (let i = 0; i < days.length; i += 1) {
      days[i].dt = format(fromUnixTime(days[i].dt), 'E');
    }

    const val = Math.round(this.windDirection / 22.5 + 0.5);
    const arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    this.windDirection = arr[val % 16];

    this.sunrise = format(fromUnixTime(this.sunrise), 'h:mm a');
    this.sunset = format(fromUnixTime(this.sunset), 'h:mm a');
  }

  toMetric(F = '', mph = '') {
    const MPH_TO_MPS = 0.44704;
    const c = ((F - 32) * 5) / 9;
    const mps = mph * MPH_TO_MPS;
    return { c, mps };
  }

  toImperial(C = '', mps = '') {
    const MPS_TO_MPH = 2.237;
    const f = C * 1.8 + 32;
    const mph = mps * MPS_TO_MPH;
    return { f, mph };
  }

  unitConversion() {
    const days = [this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7];

    if (this.units === 'metric') {
      for (let i = 0; i < days.length; i += 1) {
        days[i].temp.max = this.toMetric(days[i].temp.max).c;
        days[i].temp.min = this.toMetric(days[i].temp.min).c;
      }
      this.temp = this.toMetric(this.temp).c;
      this.hi = this.toMetric(this.hi).c;
      this.low = this.toMetric(this.low).c;
      this.feelsLike = this.toMetric(this.feelsLike).c;
      this.dewpoint = this.toMetric(this.dewpoint).c;
      this.windSpeed = this.toMetric('', this.windSpeed.split(' ')[0]).mps;
    } else if (this.units === 'imperial') {
      for (let i = 0; i < days.length; i += 1) {
        days[i].temp.max = this.toImperial(days[i].temp.max).f;
        days[i].temp.min = this.toImperial(days[i].temp.min).f;
      }
      this.temp = this.toImperial(this.temp).f;
      this.hi = this.toImperial(this.hi).f;
      this.low = this.toImperial(this.low).f;
      this.feelsLike = this.toImperial(this.feelsLike).f;
      this.dewpoint = this.toImperial(this.dewpoint).f;
      this.windSpeed = this.toImperial('', this.windSpeed.split(' ')[0]).mph;
    }

    // reformat data
    this.displayTemp = `${`${this.temp}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayHi = `${`${this.hi}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayLow = `${`${this.low}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayFeelsLike = `${`${this.feelsLike}`.split('.')[0]}°${this.unitSymbol}`;
    this.displayDewpoint = `${`${this.dewpoint}`.split('.')[0]}°${this.unitSymbol}`;
    this.windSpeed = `${this.windSpeed.toPrecision(4)} ${this.windSpeedUnits}`;
  }
}
export default OpenWeather;
