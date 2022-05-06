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
  }

  async oneCallAPICall() {
    const geocodingRequest = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${OpenWeather.country_code}&limit=${OpenWeather.limit}&appid=${OpenWeather.APIkey}`,
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

    this.temp = `${`${this.temp}`.split('.')[0]}°${this.unitSymbol}`;
    this.hi = `${`${this.hi}`.split('.')[0]}°${this.unitSymbol}`;
    this.low = `${`${this.low}`.split('.')[0]}°${this.unitSymbol}`;
    this.feelsLike = `${`${this.feelsLike}`.split('.')[0]}°${this.unitSymbol}`;
    this.humidity = `${this.humidity}%`;
    this.dewpoint = `${`${this.dewpoint}`.split('.')[0]}°${this.unitSymbol}`;
    this.pressure = `${(this.pressure / hPa_TO_inHg_Conversion_Number).toPrecision(4)} inHg`;
    this.windSpeed = `${this.windSpeed} ${this.windSpeedUnits}`;

    const days = [this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7];
    for (let i = 0; i < days.length; i += 1) {
      days[i].temp.max = `${`${days[i].temp.max}`.split('.')[0]}°${this.unitSymbol}`;
      days[i].temp.min = `${`${days[i].temp.min}`.split('.')[0]}°${this.unitSymbol}`;
      days[i].dt = format(fromUnixTime(days[i].dt), 'E');
    }

    switch (true) {
      // eslint-disable-next-line operator-linebreak
      case this.windDirection >= 348.75 &&
        (this.windDirection <= 360 || this.windDirection < 11.25):
        this.windDirection = 'N';
        break;
      case this.windDirection >= 11.25 && this.windDirection < 33.75:
        this.windDirection = 'NNE';
        break;
      case this.windDirection >= 33.75 && this.windDirection < 56.25:
        this.windDirection = 'ENE';
        break;
      case this.windDirection >= 56.25 && this.windDirection < 78.75:
        this.windDirection = 'E';
        break;
      case this.windDirection >= 101.25 && this.windDirection < 123.75:
        this.windDirection = 'ESE';
        break;
      case this.windDirection >= 123.75 && this.windDirection < 146.25:
        this.windDirection = 'SE';
        break;
      case this.windDirection >= 146.25 && this.windDirection < 168.75:
        this.windDirection = 'SSE';
        break;
      case this.windDirection >= 168.75 && this.windDirection < 191.25:
        this.windDirection = 'S';
        break;
      case this.windDirection >= 191.25 && this.windDirection < 213.75:
        this.windDirection = 'SSW';
        break;
      case this.windDirection >= 213.75 && this.windDirection < 236.25:
        this.windDirection = 'SW';
        break;
      case this.windDirection >= 236.75 && this.windDirection < 258.75:
        this.windDirection = 'WSW';
        break;
      case this.windDirection >= 258.75 && this.windDirection < 281.25:
        this.windDirection = 'W';
        break;
      case this.windDirection >= 281.25 && this.windDirection < 303.75:
        this.windDirection = 'WNW';
        break;
      case this.windDirection >= 303.75 && this.windDirection < 326.25:
        this.windDirection = 'NW';
        break;
      case this.windDirection >= 326.25 && this.windDirection < 348.75:
        this.windDirection = 'NNW';
        break;
      default:
        this.windDirection = `${this.windDirection}`;
        break;
    }

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
        days[i].temp.max = this.toMetric(days[i].temp.max.split('°')[0]).c;
        days[i].temp.min = this.toMetric(days[i].temp.min.split('°')[0]).c;
      }
      this.temp = this.toMetric(this.temp.split('°')[0]).c;
      this.hi = this.toMetric(this.hi.split('°')[0]).c;
      this.low = this.toMetric(this.low.split('°')[0]).c;
      this.feelsLike = this.toMetric(this.feelsLike.split('°')[0]).c;
      this.dewpoint = this.toMetric(this.dewpoint.split('°')[0]).c;
      this.windSpeed = this.toMetric('', this.windSpeed.split(' ')[0]).mps;
    } else if (this.units === 'imperial') {
      for (let i = 0; i < days.length; i += 1) {
        days[i].temp.max = this.toImperial(days[i].temp.max.split('°')[0]).f;
        days[i].temp.min = this.toImperial(days[i].temp.min.split('°')[0]).f;
      }
      this.temp = this.toImperial(this.temp.split('°')[0]).f;
      this.hi = this.toImperial(this.hi.split('°')[0]).f;
      this.low = this.toImperial(this.low.split('°')[0]).f;
      this.feelsLike = this.toImperial(this.feelsLike.split('°')[0]).f;
      this.dewpoint = this.toImperial(this.dewpoint.split('°')[0]).f;
      this.windSpeed = this.toImperial('', this.windSpeed.split(' ')[0]).mph;
    }

    // reformat data
    this.temp = `${`${this.temp}`.split('.')[0]}°${this.unitSymbol}`;
    this.hi = `${`${this.hi}`.split('.')[0]}°${this.unitSymbol}`;
    this.low = `${`${this.low}`.split('.')[0]}°${this.unitSymbol}`;
    this.feelsLike = `${`${this.feelsLike}`.split('.')[0]}°${this.unitSymbol}`;
    this.dewpoint = `${`${this.dewpoint}`.split('.')[0]}°${this.unitSymbol}`;
    this.windSpeed = `${this.windSpeed.toPrecision(4)} ${this.windSpeedUnits}`;

    for (let i = 0; i < days.length; i += 1) {
      days[i].temp.max = `${`${days[i].temp.max}`.split('.')[0]}°${this.unitSymbol}`;
      days[i].temp.min = `${`${days[i].temp.min}`.split('.')[0]}°${this.unitSymbol}`;
    }
  }
}
export default OpenWeather;
