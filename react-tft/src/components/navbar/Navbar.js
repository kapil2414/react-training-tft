import { Link } from 'react-router-dom';
import { PAGE_ROUTES } from "../../utils/constants";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={PAGE_ROUTES.LOGIN} className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to={PAGE_ROUTES.HOME} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={PAGE_ROUTES.ABOUT} className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to={PAGE_ROUTES.GITHUBPROFILE} className="nav-link">User Gihub Profile</Link>
        </li>

        <li className="nav-item">
          <Link to={PAGE_ROUTES.WEATHER} className="nav-link">Show Weather</Link>
        </li>
        <li className="nav-item">
          <Link to={PAGE_ROUTES.FORM} className="nav-link">Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;