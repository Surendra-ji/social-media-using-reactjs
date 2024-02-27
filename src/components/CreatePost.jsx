import { BiSolidUserPlus } from "react-icons/bi";
import { PiSubtitlesLight } from "react-icons/pi";
import { VscReactions } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { LiaHashtagSolid } from "react-icons/lia";
import { useContext, useRef } from "react";
import { PostlistContext } from "../store/post-list-store";
import {  Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
    // const navigate = useNavigate();
    
    // const {addPost} = useContext(PostlistContext);
    // const userIDElement = useRef();
    // const titleElement  = useRef();
    // const contentElement  = useRef();
    // const numReactionsElement  = useRef();
    // const tagsElement  = useRef();

    // const handleSubmit = (event) => {
        // event.preventDefault();
        // const userID = userIDElement.current.value;
        // const title = titleElement.current.value;
        // const content = contentElement.current.value;
        // const numReactions = numReactionsElement.current.value;
        // const tags = tagsElement.current.value;
        // // addPost(userID,title,content,numReactions,tags);
        // userIDElement.current.value = "";
        // titleElement.current.value = "";
        // contentElement.current.value = "";
        // numReactionsElement.current.value = "";
        // tagsElement.current.value = "";

        
    // }
    
    return <>
        <Form method="POST" className="post-form bg-dark text-white" > 
        {/* onSubmit={(event) => handleSubmit(event)} */}
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">User ID <BiSolidUserPlus/></label>
                <input type="Text" name="userId" className="form-control form-control-userid" id="exampleFormControlInput1" placeholder="User-123"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput2">Title <PiSubtitlesLight/></label>
                <input type="Text" name="title" className=" form-control form-control-title" id="exampleFormControlInput2" placeholder="Travelling to Goa..."/>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Content <TfiWrite/></label>
                <textarea name="body" className="form-control form-control-content" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us more about it..."></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput3">Number of Reactions <VscReactions/></label>
                <input type="Text" name="reactions" className=" form-control form-control-reactions" id="exampleFormControlInput3" placeholder="How many people react on this post..."/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput4">Tags <LiaHashtagSolid/></label>
                <input type="Text" name="tags" className=" form-control form-control-tags" id="exampleFormControlInput4" placeholder="Tags related to this post..."/>
            </div>

            <button type="submit" className="badge bg-success post-btn">Post</button>
        </Form>
    </>
}

export default CreatePost;

export async function createPostAction(data) {
   const formData = await data.request.formData();
   const postData = Object.fromEntries(formData);
   postData.tags = postData.tags.split(' ');
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => {
            console.log(post);
            // addPost(post)
            // navigate('/');
        });
        return redirect('/');
}