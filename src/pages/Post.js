import { useParams } from "react-router-dom";
import { Errors } from "../components/Errors";
import { Loading } from "../components/Loading";
import { useSinglePost } from "../hooks/useSinglePost";
import {GetSinglePost} from "../components/GetSinglePost"


export const Post = () => {
    const {id} = useParams();
    const {post, error, loading } = useSinglePost(id);
    if (loading) return <Loading/>
    if (error) return <Errors />
    return (
        <div>
            <GetSinglePost post={post} />
        </div>
    )
}