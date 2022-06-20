import "../Css/Post.css";
import {Link} from "react-router-dom";
export const PostsList = ({posts}) => {
           
  return (
    <ul className="posts">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <img className="imgpost"
                src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
                alt={post.text}
              />
            </Link>
            <p className="ptext">{post.mess}</p>
          </li>
        );
      })}
    </ul>
  );
};