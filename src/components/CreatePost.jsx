import { BiSolidUserPlus } from "react-icons/bi";
import { PiSubtitlesLight } from "react-icons/pi";
import { VscReactions } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { LiaHashtagSolid } from "react-icons/lia";
import { useContext, useRef } from "react";
import { PostlistContext } from "../store/post-list-store";

const CreatePost = () => {
    
    const {addPost} = useContext(PostlistContext);
    const userIDElement = useRef();
    const titleElement  = useRef();
    const contentElement  = useRef();
    const numReactionsElement  = useRef();
    const tagsElement  = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userID = userIDElement.current.value;
        const title = titleElement.current.value;
        const content = contentElement.current.value;
        const numReactions = numReactionsElement.current.value;
        const tags = tagsElement.current.value;
        addPost(userID,title,content,numReactions,tags);
        userIDElement.current.value = "";
        titleElement.current.value = "";
        contentElement.current.value = "";
        numReactionsElement.current.value = "";
        tagsElement.current.value = "";
    }
    
    return <>
        <form className="post-form bg-dark text-white" onSubmit={(event) => handleSubmit(event)}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">User ID <BiSolidUserPlus/></label>
                <input type="Text" ref={userIDElement} className="form-control form-control-userid" id="exampleFormControlInput1" placeholder="User-123"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput2">Title <PiSubtitlesLight/></label>
                <input type="Text" ref={titleElement} className=" form-control form-control-title" id="exampleFormControlInput2" placeholder="Travelling to Goa..."/>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Content <TfiWrite/></label>
                <textarea ref={contentElement} className="form-control form-control-content" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us more about it..."></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput3">Number of Reactions <VscReactions/></label>
                <input type="Text" ref={numReactionsElement} className=" form-control form-control-reactions" id="exampleFormControlInput3" placeholder="How many people react on this post..."/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput4">Tags <LiaHashtagSolid/></label>
                <input type="Text" ref={tagsElement} className=" form-control form-control-tags" id="exampleFormControlInput4" placeholder="Tags related to this post..."/>
            </div>

            <button type="submit" className="badge bg-success post-btn">Post</button>
        </form>
    </>
}

export default CreatePost;