const weatherData = {
  name: "Delhi",
  main: {
    temp: 37.05,
    humidity: 13,
  },
  weather: [
    {
      main: "Clear",
      icon: "01d",
    },
  ],
  wind: {
    speed: 3.6,
  },
};

function searchWeather() {
  const resultArea = document.querySelector("#resultArea");
  resultArea.innerHTML = `
  <div>
        <h3>
          <span class="bi bi-geo-alt-fill text-gray-500"></span>&nbsp;${weatherData.name}
        </h3>
        <p class="text-7xl inline">${weatherData.main.temp}<span class="text-gray-500">°c</span></p>
        <p class="inline">/&nbsp;${convertToF(weatherData.main.temp)}&nbsp;°F</p>
      </div>
      <div>
        <p class="flex items-center">
          <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" class="w-8 h-8"/>${weatherData.weather[0].main}</p>
        <p><span class="bi bi-moisture"></span>&nbsp;&nbsp;${weatherData.main.humidity}</p>
        <p><span class="bi bi-wind"></span>&nbsp;${weatherData.wind.speed}</p>
      </div>
  `;

  resultArea.classList =
    "mt-5 border border-2 border-gray-400 rounded-lg px-4 py-4 w-fit m-auto flex gap-10";
}

function convertToF(c) {
  let result = c * 1.8 + 32;
  return result;
}
