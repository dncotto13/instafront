import { useState, useEffect } from "react";



export const useSinglePost = (id) => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState ("");
    const [loading, setLoading] = useState (true);

    useEffect(()=>{
            
        const getPost = async () =>{
            try{
                setLoading(true);
                const res = await fetch (`${process.env.REACT_APP_BACKEND}/post/${id}`);
                const json = await res.json();
                if(!res.ok) {
                    throw new Error (json.message)
                }
                setPost(json.message);
            }
            catch(error){
                setError(error.message || "merda")
            }
                finally{
                setLoading(false);
            }    
        };
        getPost();
    },[id])

    
  

    return {post, error, loading,}
}