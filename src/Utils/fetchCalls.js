var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?";
var apiKey = "898b277c6fc6f18c77b1aabe15516f58";

const API = {
  getCoordinates: (city) => {
    const rootEndPoint = "https://api.openweathermap.org/geo/1.0/direct";
    // Concat url end point with needed query parameters
    let apiCall = rootEndPoint + "?q=" + city + "&appid=" + apiKey;
    return fetch(apiCall)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log("Coordinates from response", data);
        return data;
      });
  },
  getWeather: (lat, lon) => {
    var apiCall = weatherApi + "lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    return fetch(apiCall)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log("Weather data from response", data);
        return data;
      });
  },
};

export default API;