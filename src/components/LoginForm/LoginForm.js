import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <label>
        Email: <input type="email" name="email" />
      </label>
      <label>
        Senha: <input type="password" name="password" />
      </label>
      <button className="button__green button" type="submit">
        Enviar
      </button>
    </div>
  );
};

export default LoginForm;
