class OpenWeather {
  static limit = 1;

  static part = 'minutely,hourly,alerts';

  constructor(city, units = 'imperial') {
    this.city = city;
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
  }

  async oneCallAPICall() {
    try {
      const geocodingRequest = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=${OpenWeather.limit}&appid=${APIkey}`,
      );
      const geocodingResponse = await geocodingRequest.json();
      const { lat } = geocodingResponse;
      const { lon } = geocodingResponse;
      const openWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${this.units}&exclude=${OpenWeather.part}&appid=${APIkey}`,
        { mode: 'cors' },
      );
      const dataResponse = await openWeatherResponse.json();
      //   img.src = dataResponse.data.images.original.url;
      this.temp = dataResponse.curremt.temp;
      this.feelsLike = dataResponse.current.feels_like;
      this.humidity = dataResponse.current.humidity;
      this.dewpoint = dataResponse.current.dew_point;
      this.pressure = dataResponse.current.pressure;
      this.UVIndex = dataResponse.current.uvi;
      this.windSpeed = dataResponse.current.wind_speed;
      this.windDirection = dataResponse.current.wind_deg;
      this.sunrise = dataResponse.current.sunrise;
      this.sunset = dataResponse.current.sunset;
    } catch (error) {
      console.log(error);
    }
  }
}

export default OpenWeather;
