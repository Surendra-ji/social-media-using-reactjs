import { useContext } from "react";
import Post from "./Post";
import { PostlistContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostlistContext);
    const handleGetPostServer = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => addInitialPosts(data.posts))
    }
    return <>
        {postList.length === 0 && <WelcomeMsg onGetPostServer={handleGetPostServer} />}
        <div className="post-container">
            {postList.map((post) => <Post key={post.id} post={post} />)}
        </div>
    </>
}
export default PostList;