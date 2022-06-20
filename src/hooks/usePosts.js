import { useEffect, useState } from "react";


export const usePosts = (id) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
                     const getAllPosts = async () => {
                      const res = await fetch(
                        `${process.env.REACT_APP_BACKEND}`
                      );
                      const json = await res.json();
                      if (!res.ok) {
                        throw new Error(json.message);
                      }
                      return json.data;
                    };
                     const getUserPosts = async (id) => {
                      const res = await fetch(
                        `${process.env.REACT_APP_BACKEND}/user/${id}/posts`
                      );
                      const json = await res.json();
                      if (!res.ok) {
                        throw new Error(json.message);
                      }
                      return json.data;
                    };

  useEffect(() => {

    console.log(id);
    const getPosts = async () => {
      try {
        setLoading(true);
const data = id
? await getUserPosts(id)
: await getAllPosts();
setPosts(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [id]);
  return { posts, error, loading,};
};
