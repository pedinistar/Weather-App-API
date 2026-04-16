function searchWeather() {
  const CITY = document.querySelector("#city").value.trim();
  const resultArea = document.querySelector("#resultArea");

  if (!CITY) {
    resultArea.innerHTML = `
    <p class="text-red-500 text-center px-4 py-5">
      Please enter a city name
    </p>
  `;
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=f4b05b56d7811bc2b2870b83b34cd1bb&units=metric`,
  )
    .then((response) => response.json())
    .then(function (data) {
      resultArea.innerHTML = "";

      if (data.cod === "404") {
        resultArea.innerHTML = `
    <p class="text-red-500 text-center px-4 py-5">
      City not found
    </p>
  `;
        return;
      }

      resultArea.innerHTML = `
  <div>
        <h3>
          <span class="bi bi-geo-alt-fill text-gray-500"></span>&nbsp;${data.name}
        </h3>
        <p class="text-7xl inline">${data.main.temp}<span class="text-gray-500">°c</span></p>
        <p class="inline">/&nbsp;${convertToF(data.main.temp)}&nbsp;°F</p>
      </div>
      <div>
        <p class="flex items-center">
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="w-8 h-8"/>${data.weather[0].main}</p>
        <p><span class="bi bi-moisture"></span>&nbsp;&nbsp;${data.main.humidity} %</p>
        <p><span class="bi bi-wind"></span>&nbsp;${data.wind.speed} m/s</p>
      </div>
  `;

      resultArea.classList =
        "mt-5 border border-2 border-gray-400 rounded-lg px-4 py-4 w-fit m-auto flex gap-10";
    })
    .catch((err) => console.log(err));
}

function convertToF(c) {
  let result = c * 1.8 + 32;
  return Math.floor(result);
}
