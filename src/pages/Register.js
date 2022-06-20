import "../Css/Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
 const navigate = useNavigate();

 const[name, setName] = useState("");
 const [surname, setSurname] = useState("");
 const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("La contraseña no coincide");
      return;
    }

    try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
      method: "POST",
      body: JSON.stringify({ name, surname, age, username, email, password: pass1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  const json = await res.json();
   if (!res.ok) {
     throw new Error(json.message);
   }
   navigate("/")
} catch (error) {
    setError(error.messsage);
}
};
    return (
      <form onSubmit={handleSubmit} className="registerform">
                <label htmlFor="name">Nombre</label>
        <input
          className="registerinput"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
                <label htmlFor="surname">Apellidos</label>
        <input
          className="registerinput"
          name="surname"
          value={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
                <label htmlFor="age">Edad</label>
        <input
          className="registerinput"
          name="age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="registerinput"
          name="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Nombre de usuario</label>
        <input
          className="registerinput"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="pass1">Contraseña</label>
        <input
          className="registerinput"
          name="pass1"
          type="password"
          value={pass1}
          required
          onChange={(e) => setPass1(e.target.value)}
        />
        <label htmlFor="pass2">Confirma tu Contraseña</label>

        <input
          className="registerinput"
          type="password"
          id="pass2"
          name="pass2"
          value={pass2}
          required
          onChange={(e) => setPass2(e.target.value)}
        />
        <button className="registerbutton">Regístrate</button>
        {error ? <p>{error}</p> : null}
      </form>
    );
}