import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#0077b6", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
        Signup
      </Link>
      <Link to="/login" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
        Login
      </Link>
      <Link to="/weather/add" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
        Add Weather
      </Link>
      <Link to="/weather/list" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
        Weather Records
      </Link>
      <Link to="/weather/current" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
        Current Weather
      </Link>
    </nav>
  );
}
