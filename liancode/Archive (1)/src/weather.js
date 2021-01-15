function loadWeather(cityDiv, city, errorCallback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=61f899c917093950e98cc99e5ac4f830&units=metric`;
  // Promise
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temperatureInformation = data.main;
      //const weatherInformation = .description

      const actualTemperature = temperatureInformation.temp;
      const weatherDescription = data.weather[0].description;
      const icon = data.weather[0].icon;
      // const descriptionTemperature = weatherInformation.description;
      //  const weatherContainer = document.createElement("p");
      // weatherContainer.innerHTML = ` <img src=http://openweathermap.org/img/wn/${icon}.png>`;

      const weatherhead = document.createElement("h2");
      weatherhead.innerHTML = `Assumed weather:`;
      cityDiv.appendChild(weatherhead);
      const weather = document.createElement("h4");
      weather.innerHTML = `The temperature in ${city.city}: 
        <br/> ${actualTemperature}° 
        Celsius with 
        ${weatherDescription}. <img src=http://openweathermap.org/img/wn/${icon}.png>`;
      cityDiv.appendChild(weather);
    })
    .catch((error) => {
      console.log("something went wrong", error);
      errorCallback();
    });
}

export default loadWeather;
