import { useState } from "react";

function Login({ setUser }) { // receive setUser from App.jsx
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const response = await fetch("http://localhost:8087/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // matches LoginRequest DTO
      });

      if (!response.ok) {
        const errorText = await response.text();
        setMessage(errorText);
        return;
      }

      const user = await response.json();
      setUser(user); // store logged-in user in App.jsx
      setMessage("Login successful!");
      // reset form
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMessage("Error logging in.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
