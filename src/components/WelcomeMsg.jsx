const WelcomeMsg = ({onGetPostServer}) => {
    return <center>
        <h1>There is no post..</h1>
        <button className="btn btn-primary" onClick={onGetPostServer}>Fetch post from server</button>
    </center>

}

export default WelcomeMsg;