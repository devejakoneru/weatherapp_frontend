import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "./SignUpPage";
import Login from "./Login";
import WeatherForm from "./weatherform";
import WeatherList from "./WeatherList";
import Weather from "./Weather";
import AddWeather from "./AddWeather";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null); // Store logged-in user

  return (
    <Router>
      <NavBar user={user} /> {/* Optional: Show user in NavBar */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} /> {/* Pass setUser */}
        <Route
          path="/weather/add"
          element={<WeatherForm userId={user ? user.id : null} />} // Pass userId
        />
        <Route path="/weather/list" element={<WeatherList />} />
        <Route path="/weather/current" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
