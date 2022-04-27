import * as elementBuilder from './elementBuilder';

function unitSelector() {
  const selectionContainer = elementBuilder.newElement({
    element: 'div',
    elementID: 'unitSelectionContainer',
  });
  return selectionContainer;
}

function currentWeather() {
  const currentWeatherContainer = elementBuilder.newElement({
    element: 'div',
    elementID: 'currentWeatherContainer',
    text: 'Success',
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
  });

  const currentWeatherTemp = elementBuilder.newElement({
    element: 'div',
    elementID: 'currentWeatherTemp',
  });

  const currentWeatherHiContainer = elementBuilder.newElement({
    element: 'div',
    elementID: 'currentWeatherHiContainer',
  });

  const currentWeatherHi = elementBuilder.newElement({
    element: 'div',
    elementID: 'currentWeatherHi',
  });

  const currentWeatherLowContainer = elementBuilder.newElement({
    element: 'div',
    elementID: 'currentWeatherLowContainer',
  });

  const currentWeatherLow = elementBuilder.newElement({
    element: 'div',
    elementID: 'currentWeatherLow',
  });

  currentWeatherContainer.appendChild(currentWeatherIconContainer);
  currentWeatherIconContainer.appendChild(currentWeatherIcon);
  currentWeatherContainer.appendChild(currentWeatherDescription);
  currentWeatherContainer.appendChild(currentWeatherTemp);
  currentWeatherContainer.appendChild(currentWeatherHiContainer);
  currentWeatherHiContainer.appendChild(currentWeatherHi);
  currentWeatherContainer.appendChild(currentWeatherLowContainer);
  currentWeatherLowContainer.appendChild(currentWeatherLow);

  return currentWeatherContainer;
}

function dailyForecast() {
  const dailyForecastContainer = elementBuilder.newElement({
    element: 'div',
    elementID: 'dailyForecastContainer',
  });

  for (let i = 0; i < 7; i += 1) {
    const dayContainer = elementBuilder.newElement({
      element: 'div',
      elementID: `day${i}Container`,
      className: 'dailyForecastContainer',
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

    const dayHiContainer = elementBuilder.newElement({
      element: 'div',
      elementID: `day${i}HiContainer`,
      className: 'forecastHiContainer',
    });

    const dayHi = elementBuilder.newElement({
      element: 'div',
      elementID: `day${i}Hi`,
      className: 'forecastHi',
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
    });

    dailyForecastContainer.appendChild(dayContainer);
    dayContainer.appendChild(dayIconContainer);
    dayIconContainer.appendChild(dayIcon);
    dayContainer.appendChild(dayHiContainer);
    dayHiContainer.appendChild(dayHi);
    dayContainer.appendChild(dayLowContainer);
    dayLowContainer.appendChild(dayLow);
  }

  return dailyForecastContainer;
}

function weatherDetails() {
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
export { unitSelector, currentWeather, dailyForecast, weatherDetails };
