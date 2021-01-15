import loadWeather from "./weather.js";
import { cities, addcity, readcity, deletecity } from "./storage.js";

readcity();

//function append2() {

const citiesDiv = document.getElementById("listcity");

function createElementWithText(text) {
  const element = document.createElement("p");
  element.innerHTML = text;
  document.getElementById("errors").appendChild(element);
}

// function showbestcity() {
//   const showbestcityelement = document.getElementById("listcity");
//   showbestcityelement.innerHTML = localStorage.getItem("bestcity");
// }

// console.log(bestFriendNameInput.value);
// localStorage.setItem("bestcity", cityInput.value);
// showBestcity();

function showCity(city, index) {
  const cityDiv = document.createElement("div");
  const deletebutton = document.createElement("button");
  deletebutton.className = 'dbutton';
  deletebutton.innerHTML = 'DELETE ME!'
  cityDiv.className = 'cdiv';

  cityDiv.innerHTML = `
      <h1>${city.country}</h1>
      <h2>${city.city}</h2>
      <p>Year: ${city.year}</p>
      `;
  citiesDiv.appendChild(cityDiv);
  citiesDiv.appendChild(deletebutton);

  loadWeather(cityDiv, city, function () {
    createElementWithText(
      city.city + " city is invalid. We removed it because of load problem."
    );
    deletecity(index);
    showcityList();
  });

  deletebutton.addEventListener("click", () => {
    deletecity(index);
    showcityList();
    console.log(`You deleted ${city.country}`);
  });
}

function showcityList(city1) {
  citiesDiv.innerHTML = "";
  const filteredCountries = cities.filter(
    (singleCountry) => singleCountry !== city1
  );
  console.log(filteredCountries);
  cities.forEach(showCity);
}

// function createWeatherInformation() {
//   return `The current ${city.name} temperature is ${city.description} but it feels like.  <img src=http://openweathermap.org/img/wn/${icon}.png>  `;
// }

// function append(parent, el) {
// return parent.appendChild(el);
// }

// const ul = document.getElementById('fix');

cities.forEach(showCity);

const Form = document.getElementById("formfilling");
const countryInput = document.getElementById("country");
const cityInput = document.getElementById("city");
const yearInput = document.getElementById("year");

function onSubmit(event) {
  event.preventDefault();

  const country = countryInput.value;
  const city = cityInput.value;
  const year = yearInput.value;

  addcity({
    country: country,
    city: city,
    year: year,
  });

  Form.reset();
  showcityList();
}

Form.addEventListener("submit", onSubmit);

showcityList();
