import { Fragment } from "react/cjs/react.production.min";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import AuthStatus from "../AuthStatus/AuthStatus";
import "./Navbar.css";

function Navbar() {
  const auth = useAuth();

  const protectedLinks = () => {
    if (auth.user) {
      return (
        <li className="navbar-menu-link">
          <Link to="/petForm">Novo Pet</Link>
        </li>
      );
    }
  };

  return (
    <>
      <AuthStatus />
      <div className="nav">
        <div className="nav-navbar">
          <ul className="nav-navbar-menu">
            <li className="nav-navbar-menu-link">
              <Link to="/">Home</Link>
            </li>
            {protectedLinks()}
          </ul>
        </div>
        <div className="nav-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Navbar;
