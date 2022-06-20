import { useContext } from "react"
import {UserContext} from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import "../Css/Post.css";


export const GetSinglePost = ({post}) =>{
  const {user, token} = useContext(UserContext)
  const navigate = useNavigate();
  const deletePost = async (id, token) => {
   

    const res = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message);
    }
    navigate("/");
  };
return (
  <article className="post">
    {<p>{post.user_id}</p>}
      <img src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
          alt={post.text}/>
    <p className="ptext">{post.mess}</p>
  {user && user.id === post.user_id ? (
    <section>
  <button
  onClick={()=>{
      if (window.confirm("¿Seguro que deseas borrar la publicación?"))
      deletePost(post.id, token)}}>Delete
      </button>
      </section>) : null}
  </article>)}
