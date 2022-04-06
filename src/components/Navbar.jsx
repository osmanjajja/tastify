import { Link } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Reset from "../auth/Reset";
import Dashboard from "../auth/Dashboard";
const NavBar = () => (
  <header className="navbar">
    <Link to={Login} className="navbar__title navbar__item">
      Welcome username
    </Link>
    <Link to={Register} className="navbar__item">
      About Us
    </Link>
    <Link to={Reset} className="navbar__item">
      Contact
    </Link>
    <Link to={Dashboard} className="navbar__item">
      Help
    </Link>
  </header>
);
export default NavBar;
