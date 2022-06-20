import "../Css/Header.css";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { SearchPosts } from "./SearchPosts";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logins from "./logins.png";

export const Header = ({ setSearchedPosts }) => {
  const {user, logout} = useContext(UserContext)
  return user ? (
    <header className="header">
<div className="logo">
      <Link to={"/"}>
          <img src={logins} width="200" height="80"/>
          </Link>
      </div>
      <div className="search">
        <SearchPosts setSearchedPosts={setSearchedPosts} />
      </div>
      <div className="profile">
        <Link to={`/user/${user.id}`}>
          <button>Perfil</button>
          </Link>
      </div>
      <div className="liked">Publicaciones</div>
      <div className="upload">
        <Link to={"/upload"}>
          <button>Publicar</button>
          </Link>
      </div>
      <button onClick={() => logout()}>Cerrar sesión</button>
    </header>
  ) : (
    <header className="header">
      <div className="logo">
      <Link to={"/"}>
          <img src={logins} width="200" height="80"/>
          </Link>
      </div>
      <div className="search">
        <SearchPosts setSearchedPosts={setSearchedPosts} />
      </div>
      <div className="register">
          ¿No tienes una cuenta? 
          <button className="buttonregister"><Link to={"/register"}>¡Regístrate!</Link></button>
        </div>
      <div className="login">
        <Login />
      </div>
    </header>
  );
};
