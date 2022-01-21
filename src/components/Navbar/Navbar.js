import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import AuthStatus from "../AuthStatus/AuthStatus";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const protectedLinks = () => {
    if (auth.user) {
      return (
        <li className="navbar-menu-link">
          <button
            className="button__green"
            onClick={() => navigate("/petForm")}
          >
            Novo Pet
          </button>
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
              <button className="button__green" onClick={() => navigate("/")}>
                Home
              </button>
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
