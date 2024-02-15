const Loader = () => {
    return <div className="d-flex justify-content-center spinner">
        <div className="spinner-border" role="status" style={{
            width: "6rem",
            height: "6rem"
        }}>
            <span className="sr-only"></span>
        </div>
    </div>
}

export default Loader;