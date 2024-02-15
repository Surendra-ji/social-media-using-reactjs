import { RiChatDeleteFill } from "react-icons/ri";
import { BsHandThumbsUp } from "react-icons/bs";
import { useContext } from "react";
import { PostlistContext } from "../store/post-list-store";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostlistContext)
    return <>

        <div className="card post-card bg-dark text-white" >
            <div className="card-body ">
                <h5 className="card-title">{post.title}<span className="badge bg-success reaction"><BsHandThumbsUp /> {post.reactions}</span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                        <RiChatDeleteFill />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => <span key={tag} className="badge bg-primary tags">{tag}</span>)}
            </div>
        </div>

    </>
}

export default Post;