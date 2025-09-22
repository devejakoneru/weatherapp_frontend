import { useEffect, useState } from "react";

export default function WeatherList() {
  const [weathers, setWeathers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("http://localhost:8087/api/weather");
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();
        setWeathers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>All Weather Records</h2>
      {weathers.map((w) => (
        <div key={w.id}>
          {w.city} - {w.temperature}°C - {w.description}
        </div>
      ))}
    </div>
  );
}
