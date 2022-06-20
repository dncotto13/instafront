import { Errors } from "../components/Errors";
import { PostsList } from "../components/PostsList";
import { Loading } from "../components/Loading";
import { usePosts } from "../hooks/usePosts"

export const Home = () => {
    const {posts, loading, error} = usePosts();
    if (loading) return <Loading/>;
    if (error) return <Errors message={error} />;
     return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
}