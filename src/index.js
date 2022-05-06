import './main.css';
import * as elementBuilder from './modules/elementBuilder';
import DOMObjects from './modules/dOMcontroller';
/* You should be able to:
  1: search for a specific location.
    Use HERE Geocoder Autocomplete API for predicting location query.
  2: toggle displaying the data in Fahrenheit or Celsius.
  3: change the look of the page based on the data
      maybe by changing the color of the background or
      by adding images that describe the weather.
      (You could even use the Giphy API to find appropriate
      weather-related gifs and display them).
  4: add a ‘loading’ component that displays from the time the
     form is submitted until the information comes back from the API. */

const main = elementBuilder.newElement({
  element: 'div',
  elementID: 'container',
});

const clientData = new DOMObjects();
const searchObj = clientData.search();
const unitSelectorObj = clientData.unitSelector();
const currentWeatherObj = clientData.currentWeather();
const dailyForecastObj = clientData.dailyForecast();
const weatherDetailsObj = clientData.weatherDetails();

const model = {
  searchObj,
  unitSelectorObj,
  currentWeatherObj,
  dailyForecastObj,
  weatherDetailsObj,
};

elementBuilder.moduleRender(model, main);
elementBuilder.sendToBody(main);

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
  clientData.startSearch(searchForm, e);
});
