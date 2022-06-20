import "../Css/Login.css"
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {login} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const json = await res.json();
      if (!res.ok) {
      throw new Error(json.message);
      }
      login(json.data);
    } catch (error) {
      console.error(error);
      setError(error.message || "Error desconocido");
    }
  };

  return(
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        className="logininput"
        name="username"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="logininput"
        name="password"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginbutton">Entrar</button>
      {error ? <p className="error">{error}</p> : null}
    </form>
  );
}
