import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostlistContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostlistContext);
    const [fetching, setfetching] = useState(false);
    
    useEffect(() => {
        setfetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then((data) => {addInitialPosts(data.posts)
            setfetching(false);
            })
            return () => {
                controller.abort();
                console.log("fetch closed....");
            };
    }, [])
    
    return <>
        {fetching && <Loader/>}
        {!fetching && postList.length === 0 && <WelcomeMsg/>}
        <div className="post-container">
            {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
        </div>
    </>
}
export default PostList;