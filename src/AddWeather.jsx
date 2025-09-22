import React, { useState } from "react";

function AddWeather({ userId }) {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const addWeather = async () => {
  try {
    const response = await fetch("http://localhost:8087/api/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city,
        temperature: parseFloat(temperature),
        description,
        userId: user.id // pass logged-in user ID
      }),
    });

    if (!response.ok) throw new Error("Failed to add weather record");

    const data = await response.json();
    alert("Weather record added!");
    setCity(""); setTemperature(""); setDescription("");
  } catch (err) {
    console.error(err);
    alert("Error adding weather record.");
  }
};


  return (
    <div>
      <h2>Add Weather Record</h2>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addWeather}>Add Weather</button>
      <p>{message}</p>
    </div>
  );
}

export default AddWeather;
