import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };

    auth.login(data, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginForm />
    </form>
  );
}

export default Login;
