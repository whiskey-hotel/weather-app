/* eslint-disable class-methods-use-this */
import * as elementBuilder from './elementBuilder';
import OpenWeather from './openWeather';
import Validate from './validate';

class DOMObjects {
  static userData = new OpenWeather();

  static update() {
    document.getElementById('currentWeatherDescription').textContent =
      DOMObjects.userData.description;
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

    const currentWeatherIconContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'currentWeatherIconContainer',
    });

    const currentWeatherIcon = elementBuilder.newElement({
      element: 'img',
      elementID: 'currentWeatherIcon',
      // src and alt
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

    currentWeatherDescription.addEventListener('change', () => {
      currentWeatherDescription.textContent = DOMObjects.userData.description;
    });

    currentWeatherContainer.appendChild(currentWeatherIconContainer);
    currentWeatherIconContainer.appendChild(currentWeatherIcon);
    currentWeatherContainer.appendChild(currentWeatherDescription);
    currentWeatherContainer.appendChild(currentWeatherTemp);
    currentWeatherContainer.appendChild(currentWeatherHiLoContainer);
    currentWeatherHiLoContainer.appendChild(currentWeatherHiContainer);
    currentWeatherHiContainer.appendChild(currentWeatherHi);
    currentWeatherHiLoContainer.appendChild(currentWeatherLowContainer);
    currentWeatherLowContainer.appendChild(currentWeatherLow);

    return { currentWeatherContainer, currentWeatherDescription };
  }

  static dailyForecast() {
    const dailyForecastContainer = elementBuilder.newElement({
      element: 'div',
      elementID: 'dailyForecastContainer',
    });

    for (let i = 0; i < 7; i += 1) {
      const dayContainer = elementBuilder.newElement({
        element: 'div',
        elementID: `day${i}Container`,
        className: 'dayContainer',
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
        // src and alt
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

    const detailTemps = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailTemps',
      className: 'details',
      text: 'Temperature: ',
    });
    const detailFeelsLike = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailFeelsLike',
      className: 'details',
      text: 'Feels Like: ',
    });
    const detailHumidity = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailHumidity',
      className: 'details',
      text: 'Humidity: ',
    });
    const detailDewPoint = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailDewPoint',
      className: 'details',
      text: 'Dew Point: ',
    });
    const detailPressure = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailPressure',
      className: 'details',
      text: 'Pressure: ',
    });
    const detailUVIndex = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailUVIndex',
      className: 'details',
      text: 'UV Index: ',
    });
    const detailWindSpeed = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindSpeed',
      className: 'details',
      text: 'Wind Speed: ',
    });
    const detailWindDirection = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailWindDirection',
      className: 'details',
      text: 'Wind Direction: ',
    });
    const detailSunrise = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunrise',
      className: 'details',
      text: 'Sunrise: ',
    });
    const detailSunset = elementBuilder.newElement({
      element: 'div',
      elementID: 'detailSunset',
      className: 'details',
      text: 'Sunset: ',
    });

    weatherDetailsContainer.appendChild(title);
    weatherDetailsContainer.appendChild(detailTemps);
    weatherDetailsContainer.appendChild(detailFeelsLike);
    weatherDetailsContainer.appendChild(detailHumidity);
    weatherDetailsContainer.appendChild(detailDewPoint);
    weatherDetailsContainer.appendChild(detailPressure);
    weatherDetailsContainer.appendChild(detailUVIndex);
    weatherDetailsContainer.appendChild(detailWindSpeed);
    weatherDetailsContainer.appendChild(detailWindSpeed);
    weatherDetailsContainer.appendChild(detailWindDirection);
    weatherDetailsContainer.appendChild(detailSunrise);
    weatherDetailsContainer.appendChild(detailSunset);

    return weatherDetailsContainer;
  }
}
export default DOMObjects;
