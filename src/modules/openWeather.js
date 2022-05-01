class OpenWeather {
  static limit = 1;

  static part = 'minutely,hourly,alerts';

  static APIkey = 'c7062688ddc2df2a8c9585ac7f1742eb';

  static country_code = 'ANSI';

  constructor(city = 'default', units = 'imperial') {
    this.city = city;
    this.state = '';
    this.units = units;
    this.temp = '';
    this.feelsLike = '';
    this.humidity = '';
    this.dewpoint = '';
    this.pressure = '';
    this.UVIndex = '';
    this.windSpeed = '';
    this.windDirection = '';
    this.sunrise = '';
    this.sunset = '';
    this.day0 = '';
    this.day1 = '';
    this.day2 = '';
    this.day3 = '';
    this.day4 = '';
    this.day5 = '';
    this.day6 = '';
    this.description = '';
  }

  async oneCallAPICall() {
    try {
      const geocodingRequest = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${OpenWeather.country_code}&limit=${OpenWeather.limit}&appid=${OpenWeather.APIkey}`,
      );
      const geocodingResponse = await geocodingRequest.json();
      if (geocodingResponse.length === 0) throw new Error('City not Found.');
      const { lat } = await geocodingResponse[0];
      const { lon } = await geocodingResponse[0];
      this.city = await geocodingResponse[0].name;
      this.state = await geocodingResponse[0].state;
      const openWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${this.units}&exclude=${OpenWeather.part}&appid=${OpenWeather.APIkey}`,
        { mode: 'cors' },
      );
      const dataResponse = await openWeatherResponse.json();
      // console.log(dataResponse);
      this.temp = dataResponse.current.temp;
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
      [, this.day0, this.day1, this.day2, this.day3, this.day4, this.day5, this.day6] =
        dataResponse.daily;
      return dataResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default OpenWeather;
