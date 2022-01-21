import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import AuthStatus from "./AuthStatus";

function Navbar() {
  const auth = useAuth();

  const protectedLinks = () => {
    if (auth.user) {
      return (
        <li>
          <Link to="/petForm">Novo Pet</Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login">Login</Link>
        </li>
      );
    }
  };

  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {protectedLinks()}
      </ul>
      <Outlet />
    </div>
  );
}

export default Navbar;
