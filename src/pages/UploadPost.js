import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

export const UploadPost = () =>{
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')
    const {token} = useContext(UserContext)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setLoading(true)
            const data = new FormData(e.target);
            const res = await fetch(`${process.env.REACT_APP_BACKEND}`,{
                method: "POST",
                body:data,
                headers:{
                    Authorization: token
                },
            });
            const json = await res.json();
            if (!res.ok){
                throw new Error(json.message)
            }
            e.target.reset()
        }catch(error){
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }
    return (
      <form className="uploadPost" onSubmit={handleSubmit}>
        <h1>Nueva publicación</h1>
        <fieldset>
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            name="image"
            id="image"
            accept={"image/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
                    {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "1000px" }}
                alt="Preview"
              />
            </figure>) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="text">Palabras buscador</label>
          <input type="text" id="text" name="text" />
        </fieldset>
        <fieldset>
          <label htmlFor="mess">Mensaje foto</label>
          <input type="text" id="mess" name="mess" />
        </fieldset>
        <button>Hacer publicación</button>
        {loading ? <p>{loading}</p> : null}
        {error ? <p>{error}</p> : null}
      </form>
    );
}