import { createContext, useEffect, useReducer, useState } from "react";

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Goa',
    body: 'Hi, goa ja rha hu dostoo, tmlog bhi chloge kyaa???',
    reactions: 299,
    userId: "user-9",
    tags: ["vaction", "enjoying", "Goa"]
},
{
    id: '2',
    title: 'Manali time',
    body: 'Hi, Manali ja rha hu dostoo, tmlog bhi chloge kyaa??? bs 6000 lagega perpeson',
    reactions: 800,
    userId: "user-2",
    tags: ["vaction", "friends", "Manali"]
}
]

export const PostlistContext = createContext({
    postList: [],
    addPost: () => { },
    // fetching: false,
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.id
        );
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList]
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload;
    }
    return newPostList;

}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostlist] = useReducer(postListReducer, []);
    // const [fetching, setfetching] = useState(false);
    
    // useEffect(() => {
    //     setfetching(true);
    //     const controller = new AbortController();
    //     const signal = controller.signal;
    //     fetch('https://dummyjson.com/posts', {signal})
    //         .then(res => res.json())
    //         .then((data) => {addInitialPosts(data.posts)
    //         setfetching(false);
    //         })
    //         return () => {
    //             controller.abort();
    //             console.log("fetch closed....");
    //         };
    // }, [])
    
    const addPost = (post) => {
        dispatchPostlist({
            type: "ADD_POST",
            payload: post
        })
    }
    const addInitialPosts = (posts) => {
        dispatchPostlist({
            type: "ADD_INITIAL_POSTS",
            payload: posts
        })
    }
    const deletePost = (id) => {
        dispatchPostlist({
            type: "DELETE_POST",
            payload: {
                id
            }
        })
    }
    return <PostlistContext.Provider value={{
        postList,
        addPost,
        // fetching,
        deletePost
    }}>{children}</PostlistContext.Provider>;
};

export default PostListProvider;

