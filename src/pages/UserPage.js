import { useParams } from "react-router-dom";
import { Errors } from "../components/Errors";
import { Loading } from "../components/Loading";
import { PostsList } from "../components/PostsList";
import { usePosts } from "../hooks/usePosts";
import { useUser } from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  const { posts } = usePosts(user.id);

  if (loading) return <Loading />;
  if (error) return <Errors message={error} />;

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};
