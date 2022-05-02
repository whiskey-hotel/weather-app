/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { fromUnixTime, format } from 'date-fns';

class OpenWeather {
  static limit = 1;

  static part = 'minutely,hourly,alerts';

  static APIkey = 'c7062688ddc2df2a8c9585ac7f1742eb';

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
    try {
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
      console.log(dataResponse);
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
    } catch (error) {
      console.log(error);
    }
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
      case this.windDirection >= 348.75 && this.windDirection < 11.25:
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
    // this.sunrise = new Date(this.sunrise).toLocaleString('en-US', {weekday: 'short'});

    this.sunrise = format(fromUnixTime(this.sunrise), 'h:mm a');
    this.sunset = format(fromUnixTime(this.sunset), 'h:mm a');
  }
}
export default OpenWeather;
