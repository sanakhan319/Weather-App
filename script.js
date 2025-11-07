async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "ee364cb1b54e5d26a1417602572d400a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  if (response.status == 404) {
    document.getElementById("result").innerHTML = "❌ City not found!";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?sad')";
    return;
  }

  const data = await response.json();

  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const condition = data.weather[0].main;

  let icon = "";
  if (condition == "Clear") icon = "☀️";
  else if (condition == "Clouds") icon = "☁️";
  else if (condition == "Rain") icon = "🌧️";
  else if (condition == "Thunderstorm") icon = "🌩️";
  else if (condition == "Snow") icon = "❄️";
  else icon = "⛅";

  document.getElementById("result").innerHTML = `
    ${icon}<br>
    <strong>${data.name}</strong><br>
    🌡 Temperature: ${temp}°C <br>
    💧 Humidity: ${humidity}% <br>
    🌥 Condition: ${condition}
  `;

  // ★ Change Background Based on Weather ★
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${condition}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
