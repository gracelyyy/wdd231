const apiKey = "YOUR_API_KEY";

const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=-29.3167&lon=27.4833&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        document.querySelector("#current-temp").textContent =
            Math.round(data.list[0].main.temp);

        document.querySelector("#weather-desc").textContent =
            data.list[0].weather[0].description;

        const forecast = document.querySelector("#forecast");

        forecast.innerHTML = "";

        for (let i = 8; i <= 24; i += 8) {
            const li = document.createElement("li");

            li.textContent =
                `${Math.round(data.list[i].main.temp)}°C`;

            forecast.appendChild(li);
        }

    } catch (error) {
        console.error("Weather Error:", error);
    }
}

getWeather();
