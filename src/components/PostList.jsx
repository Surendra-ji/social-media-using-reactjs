import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostlistContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    // const { postList, fetching } = useContext(PostlistContext);
    const fetching = false;
    const postList = useLoaderData();
    
    
    return <>
        {/* {fetching && <Loader/>} */}
        { postList.length === 0 && <WelcomeMsg/>}
        <div className="post-container">
            {postList.map((post) => <Post key={post.id} post={post} />)}
        </div>
    </>
}

export const postLoader = () => {
   return fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => {
                // addInitialPosts(data.posts)
                return data.posts;
            // setfetching(false);
            })
}
export default PostList;