export const cities = [];
export const readcity = function () {
  cities.length = 0;

  const readCities = localStorage.getItem("cities");
  if (readCities !== null) {
    const loadedCities = JSON.parse(readCities);
    if (loadedCities.length > 0) {
      // ... = Spread operator
      //   cities.push(...loadedCities);
      loadedCities.forEach((city) => cities.push(city));
    }
  }
};
export const addcity = function (city) {
  cities.push(city);
  localStorage.setItem("cities", JSON.stringify(cities));
};

export const deletecity = function (index) {
  cities.splice(index, 1);
  localStorage.setItem("cities", JSON.stringify(cities));
};

// Short Description
// export const addcity = (city) => {
//   cities.push(city);
//   localStorage.setItem("cities", JSON.stringify(cities));

//   showcityList();
// };
