import { useContext } from "react";
import Post from "./Post";
import { PostlistContext} from "../store/post-list-store";

const PostList = () => {
    const {postList} = useContext(PostlistContext);
    return <>
    {postList.map((post) => <Post  key={post.id} post={post}/>)}
    
    </>
}
 export default PostList;