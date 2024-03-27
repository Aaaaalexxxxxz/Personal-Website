import faviconPic from "./assets/websitefavicon.png"

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src = {faviconPic} alt="my website fabicon"></img>
            <h2 className = "class-title">Alex Zhang</h2>
            <p className = "card-text">This is my personal website</p>
        </div>
    );

};

export default Card