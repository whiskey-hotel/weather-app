/* eslint-disable operator-linebreak */
/* eslint-disable class-methods-use-this */
import * as elementBuilder from './elementBuilder';
import OpenWeather from './openWeather';
import Validate from './validate';

class DOMObjects {
  static userData = new OpenWeather();

  static update() {
    document.getElementById(
      'currentWeatherLocation',
    ).textContent = `${DOMObjects.userData.city}, ${DOMObjects.userData.state}`;

    document.getElementById(
      'currentWeatherIcon',
    ).src = `http://openweathermap.org/img/wn/${DOMObjects.userData.icon}@2x.png`;

    document.getElementById('currentWeatherDescription').textContent =
      DOMObjects.userData.description;

    document.getElementById('currentWeatherTemp').textContent = DOMObjects.userData.temp;

    document.getElementById('currentWeatherHi').textContent = DOMObjects.userData.hi;

    document.getElementById('currentWeatherLow').textContent = DOMObjects.userData.low;

    const days = [
      DOMObjects.userData.day1,
      DOMObjects.userData.day2,
      DOMObjects.userData.day3,
      DOMObjects.userData.day4,
      DOMObjects.userData.day5,
      DOMObjects.userData.day6,
      DOMObjects.userData.day7,
    ];

    for (let i = 0; i < days.length; i += 1) {
      document.getElementById(
        `day${i + 1}Icon`,
      ).src = `http://openweathermap.org/img/wn/${days[i].weather[0].icon}@2x.png`;

      document.getElementById(`day${i + 1}OfTheWeek`).textContent = days[i].dt;
      document.getElementById(`day${i + 1}Hi`).textContent = days[i].temp.max;
      document.getElementById(`day${i + 1}Low`).textContent = days[i].temp.min;
    }

    document.getElementById('detailTempsValue').textContent = DOMObjects.userData.temp;
    document.getElementById('detailFeelsLikeValue').textContent = DOMObjects.userData.feelsLike;
    document.getElementById('detailHumidityValue').textContent = DOMObjects.userData.humidity;
    document.getElementById('detailDewPointValue').textContent = DOMObjects.userData.dewpoint;
    document.getElementById('detailPressureValue').textContent = DOMObjects.userData.pressure;
    document.getElementById('detailUVIndexValue').textContent = DOMObjects.userData.UVIndex;
    document.getElementById('detailWindSpeedValue').textContent = DOMObjects.userData.windSpeed;
    document.getElementById('detailWindDirectionValue').textContent =
      DOMObjects.userData.windDirection;
    document.getElementById('detailSunriseValue').textContent = DOMObjects.userData.sunrise;
    document.getElementById('detailSunsetValue').textContent = DOMObjects.userData.sunset;

    console.log('success');
    console.log(DOMObjects.userData);
  }

  static search() {
    const errorBar = elementBuilder.newElement({
      element: 'div',
      elementID: 'errorBar',
    });

    const searchContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'searchContainer',
    });

    const searchForm = elementBuilder.newElement({
      element: 'form',
      elementID: 'searchForm',
    });

    const searchBar = elementBuilder.newElement({
      element: 'input',
      elementID: 'searchBar',
    });

    searchForm.setAttribute('onSubmit', 'return false');
    searchForm.setAttribute('noValidate', '');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('placeholder', 'Search a US City');
    searchBar.setAttribute('required', '');
    searchBar.setAttribute('autocomplete', 'off');

    searchForm.addEventListener('submit', async (e) => {
      const { city } = new Validate(searchForm);
      if (Array.isArray(city)) {
        e.preventDefault();
        errorBar.textContent = city.join(', ');
      } else {
        DOMObjects.userData.city = city;
        await DOMObjects.userData.oneCallAPICall();
        DOMObjects.update();
        searchForm.reset();
      }
    });

    searchContainer.appendChild(errorBar);
    searchContainer.appendChild(searchForm);
    searchForm.appendChild(searchBar);

    return searchContainer;
  }

  static unitSelector() {
    const selectionContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'unitSelectionContainer',
    });

    const imperialUnits = elementBuilder.newElement({
      element: 'button',
      elementID: 'imperialUnits',
      text: 'Fahrenheit',
    });

    const metricUnits = elementBuilder.newElement({
      element: 'button',
      elementID: 'metricUnits',
      text: 'Celsius',
    });

    selectionContainer.appendChild(imperialUnits);
    selectionContainer.appendChild(metricUnits);

    return selectionContainer;
  }

  static currentWeather() {
    const currentWeatherContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherContainer',
    });

    const currentWeatherLocation = elementBuilder.newElement({
      element: 'h2',
      elementID: 'currentWeatherLocation',
      text: 'Default Location',
    });

    const currentWeatherIconContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherIconContainer',
    });

    const currentWeatherIcon = elementBuilder.newElement({
      element: 'img',
      elementID: 'currentWeatherIcon',
      src: '',
      alt: '',
    });

    const currentWeatherDescription = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherDescription',
      text: 'Occaecat tempor proident dolore',
    });

    const currentWeatherTemp = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherTemp',
      text: '75°F',
    });

    const currentWeatherHiContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherHiContainer',
    });

    const currentWeatherHiLoContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherHiLoContainer',
    });

    const currentWeatherHi = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherHi',
      text: '80°F',
    });

    const currentWeatherLowContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherLowContainer',
    });

    const currentWeatherLow = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherLow',
      text: '57°F',
    });

    currentWeatherContainer.appendChild(currentWeatherLocation);
    currentWeatherContainer.appendChild(currentWeatherIconContainer);
    currentWeatherIconContainer.appendChild(currentWeatherIcon);
    currentWeatherContainer.appendChild(currentWeatherDescription);
    currentWeatherContainer.appendChild(currentWeatherTemp);
    currentWeatherContainer.appendChild(currentWeatherHiLoContainer);
    currentWeatherHiLoContainer.appendChild(currentWeatherHiContainer);
    currentWeatherHiContainer.appendChild(currentWeatherHi);
    currentWeatherHiLoContainer.appendChild(currentWeatherLowContainer);
    currentWeatherLowContainer.appendChild(currentWeatherLow);

    return currentWeatherContainer;
  }

  static dailyForecast() {
    const dailyForecastContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'dailyForecastContainer',
    });

    for (let i = 1; i < 8; i += 1) {
      const dayContainer = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}Container`,
        className: 'dayContainer',
      });

      const daysOfTheWeek = elementBuilder.newElement({
        element: 'span',
        elementID: `day${i}OfTheWeek`,
        className: 'daysOfTheWeek',
      });

      const dayIconContainer = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}IconContainer`,
        className: 'iconContainer',
      });

      const dayIcon = elementBuilder.newElement({
        element: 'img',
        elementID: `day${i}Icon`,
        className: 'forecastIcon',
        src: '',
        alt: '',
      });

      const dayHiLoContainer = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}HiLoContainer`,
        className: 'dayHiLoContainer',
      });

      const dayHiContainer = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}HiContainer`,
        className: 'forecastHiContainer',
      });

      const dayHi = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}Hi`,
        className: 'forecastHi',
        text: '80°F',
      });

      const dayLowContainer = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}LowContainer`,
        className: 'forecastLowContainer',
      });

      const dayLow = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}Low`,
        className: 'forecastLow',
        text: '57°F',
      });

      dailyForecastContainer.appendChild(dayContainer);
      dayContainer.appendChild(daysOfTheWeek);
      dayContainer.appendChild(dayIconContainer);
      dayIconContainer.appendChild(dayIcon);
      dayContainer.appendChild(dayHiLoContainer);
      dayHiLoContainer.appendChild(dayHiContainer);
      dayHiContainer.appendChild(dayHi);
      dayHiLoContainer.appendChild(dayLowContainer);
      dayLowContainer.appendChild(dayLow);
    }

    return dailyForecastContainer;
  }

  static weatherDetails() {
    const weatherDetailsContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'weatherDetailsContainer',
    });

    const title = elementBuilder.newElement({
      element: 'h4',
      elementID: 'title',
      text: 'Weather Details',
    });

    const detailTempsContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailTempsContainer',
      className: 'detailsContainer',
    });

    const detailTemps = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailTemps',
      className: 'details',
      text: 'Temperature: ',
    });

    const detailTempsValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailTempsValue',
      className: 'details',
    });

    const detailFeelsLikeContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailFeelsLikeContainer',
      className: 'detailsContainer',
    });

    const detailFeelsLike = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailFeelsLike',
      className: 'details',
      text: 'Feels Like: ',
    });

    const detailFeelsLikeValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailFeelsLikeValue',
      className: 'details',
    });

    const detailHumidityContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailHumidityContainer',
      className: 'detailsContainer',
    });

    const detailHumidity = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailHumidity',
      className: 'details',
      text: 'Humidity: ',
    });

    const detailHumidityValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailHumidityValue',
      className: 'details',
    });

    const detailDewPointContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailDewPointContainer',
      className: 'detailsContainer',
    });

    const detailDewPoint = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailDewPoint',
      className: 'details',
      text: 'Dew Point: ',
    });
    const detailDewPointValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailDewPointValue',
      className: 'details',
    });

    const detailPressureContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailPressureContainer',
      className: 'detailsContainer',
    });

    const detailPressure = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailPressure',
      className: 'details',
      text: 'Pressure: ',
    });
    const detailPressureValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailPressureValue',
      className: 'details',
    });

    const detailUVIndexContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailUVIndexContainer',
      className: 'detailsContainer',
    });

    const detailUVIndex = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailUVIndex',
      className: 'details',
      text: 'UV Index: ',
    });

    const detailUVIndexValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailUVIndexValue',
      className: 'details',
    });

    const detailWindSpeedContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindSpeedContainer',
      className: 'detailsContainer',
    });

    const detailWindSpeed = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindSpeed',
      className: 'details',
      text: 'Wind Speed: ',
    });

    const detailWindSpeedValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindSpeedValue',
      className: 'details',
    });

    const detailWindDirectionContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindDirectionContainer',
      className: 'detailsContainer',
    });

    const detailWindDirection = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindDirection',
      className: 'details',
      text: 'Wind Direction: ',
    });

    const detailWindDirectionValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindDirectionValue',
      className: 'details',
    });

    const detailSunriseContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunriseContainer',
      className: 'detailsContainer',
    });

    const detailSunrise = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunrise',
      className: 'details',
      text: 'Sunrise: ',
    });

    const detailSunriseValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunriseValue',
      className: 'details',
    });

    const detailSunsetContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunsetContainer',
      className: 'detailsContainer',
    });

    const detailSunset = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunset',
      className: 'details',
      text: 'Sunset: ',
    });

    const detailSunsetValue = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunsetValue',
      className: 'details',
    });

    weatherDetailsContainer.appendChild(title);
    weatherDetailsContainer.appendChild(detailTempsContainer);
    detailTempsContainer.appendChild(detailTemps);
    detailTempsContainer.appendChild(detailTempsValue);
    weatherDetailsContainer.appendChild(detailFeelsLikeContainer);
    detailFeelsLikeContainer.appendChild(detailFeelsLike);
    detailFeelsLikeContainer.appendChild(detailFeelsLikeValue);
    weatherDetailsContainer.appendChild(detailHumidityContainer);
    detailHumidityContainer.appendChild(detailHumidity);
    detailHumidityContainer.appendChild(detailHumidityValue);
    weatherDetailsContainer.appendChild(detailDewPointContainer);
    detailDewPointContainer.appendChild(detailDewPoint);
    detailDewPointContainer.appendChild(detailDewPointValue);
    weatherDetailsContainer.appendChild(detailPressureContainer);
    detailPressureContainer.appendChild(detailPressure);
    detailPressureContainer.appendChild(detailPressureValue);
    weatherDetailsContainer.appendChild(detailUVIndexContainer);
    detailUVIndexContainer.appendChild(detailUVIndex);
    detailUVIndexContainer.appendChild(detailUVIndexValue);
    weatherDetailsContainer.appendChild(detailWindSpeedContainer);
    detailWindSpeedContainer.appendChild(detailWindSpeed);
    detailWindSpeedContainer.appendChild(detailWindSpeedValue);
    weatherDetailsContainer.appendChild(detailWindDirectionContainer);
    detailWindDirectionContainer.appendChild(detailWindDirection);
    detailWindDirectionContainer.appendChild(detailWindDirectionValue);
    weatherDetailsContainer.appendChild(detailSunriseContainer);
    detailSunriseContainer.appendChild(detailSunrise);
    detailSunriseContainer.appendChild(detailSunriseValue);
    weatherDetailsContainer.appendChild(detailSunsetContainer);
    detailSunsetContainer.appendChild(detailSunset);
    detailSunsetContainer.appendChild(detailSunsetValue);

    return weatherDetailsContainer;
  }
}
export default DOMObjects;
