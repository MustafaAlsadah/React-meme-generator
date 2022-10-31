import React from "react";

export default function MemeImageSection(props){
    let meme = props.meme;
    return(
        <div className="container mt-5">
            <div className="d-flex justiy-content-center align-items-center flex-column meme-box position-relative">
                <img src={meme.memeURL} alt="" /> 
                <h2 className="meme-text top-0">{meme.topText}</h2>
                <h2 className="meme-text bottom-0">{meme.bottomText}</h2>
            </div>      
        </div>
    );
}