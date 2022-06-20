import { useNavigate } from "react-router-dom";
import "../Css/Login.css"

export const SearchPosts = ({ setSearchedPosts }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      setSearchedPosts([]);
      e.preventDefault();
      const text = e.target.elements.search.value;
      if (!text) {throw new Error ("buscar algo es obligatorio")}

      const searchParams = new URLSearchParams();
      searchParams.append("text", text);

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/search?${searchParams.toString()}`
      );
      const results = await res.json();
      if (results.length === 0) {throw new Error ("No hay resultados para tu busqueda")}
      console.log(results.data);
      setSearchedPosts(results.data);
      navigate('/search');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form className="group" onSubmit={handleSubmit}>
      <input placeholder="Buscar en Instagram" type="search" class="input"></input>
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
    </form>
  );
};
          
