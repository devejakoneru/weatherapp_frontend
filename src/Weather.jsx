import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    const apiKey = "170927c1f76e22754e68069f70abe6c6"; // replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod !== 200) {
        setError(data.message);
        setWeatherData(null);
        return;
      }
      setError("");
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather data");
    }
  };

  return (
    <div>
      <h2>Check Current Weather</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div>
          <h3>{weatherData.city}</h3>
          <img src={weatherData.icon} alt={weatherData.description} />
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind} km/h</p>
        </div>
      )}
    </div>
  );
}
