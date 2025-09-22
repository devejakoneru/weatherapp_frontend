import { useState } from "react";

export default function WeatherForm({ userId }) {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Must match WeatherRequest in backend
    const weatherData = {
      city,
      temperature: parseFloat(temperature),
      description,
      userId: userId || 1, // hardcode 1 for now if userId not passed
    };

    try {
      const response = await fetch("http://localhost:8087/api/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(weatherData),
      });

      if (!response.ok) throw new Error("Failed to add weather");

      const data = await response.json();
      console.log("Weather added:", data);

      // Reset form
      setCity("");
      setTemperature("");
      setDescription("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Temperature"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Weather</button>
    </form>
  );
}
