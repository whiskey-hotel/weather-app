import './main.css';
import * as elementBuilder from './modules/elementBuilder';
import DOMObjects from './modules/dOMcontroller';

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

window.addEventListener('load', (e) => {
  clientData.startSearch(searchForm, e);
  searchForm[0].setAttribute('value', '');
});
