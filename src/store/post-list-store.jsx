import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Goa',
    body: 'Hi, goa ja rha hu dostoo, tmlog bhi chloge kyaa???',
    reaction: 299,
    userID: "user-9",
    tags: ["vaction", "enjoying", "Goa"]
},
{
    id: '2',
    title: 'Manali time',
    body: 'Hi, Manali ja rha hu dostoo, tmlog bhi chloge kyaa??? bs 6000 lagega perpeson',
    reaction: 800,
    userID: "user-2",
    tags: ["vaction", "friends", "Manali"]
}
]

export const PostlistContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.id
        );
    } else if (action.type === "ADD_POST") {
        console.log(action.payload.id);
        console.log(action.payload);
        newPostList = [...currPostList, action.payload]
    }
    return newPostList;

}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostlist] = useReducer(postListReducer, DEFAULT_POST_LIST);
    let lastObjId = 0;
    if (postList.length >= 1) {
        const lastObj = postList[postList.length - 1];
        lastObjId = lastObj.id;
    }
    const addPost = (userID, title, content, numReactions, tags) => {
        dispatchPostlist({
            type: "ADD_POST",
            payload: {
                id: 1 + Number(lastObjId),
                title: title,
                body: content,
                reaction: numReactions,
                tags: tags.split(' '),
                userID: userID
            }
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
        addPost: addPost,
        deletePost
    }}>{children}</PostlistContext.Provider>;
};

export default PostListProvider;

