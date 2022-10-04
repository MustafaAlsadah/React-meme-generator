import React from "react";
import memesData from "../memesData.js";

export default function Form(){

    const memesArray = memesData.data.memes;

    function getAMemeURL(){
        let randomIndex = Math.floor(Math.random()*memesArray.length);
        let randomMemeURL = memesArray[randomIndex].url;
        return randomMemeURL;
    }

    const [memeURL, setMemeURL] = React.useState(getAMemeURL());
    
    function updateMemeImage(){
        setMemeURL(getAMemeURL());
    }



    return(
        <div>
            <div className="container d-flex justify-content-center">
                <div className="col-lg-8 mt-5">
                    <div className="d-flex justify-content-between">
                        <input className="form-control " type="text" placeholder="Top Text" />
                        <span className="mx-3"></span>
                        <input className="form-control " type="text" placeholder="Bottom Text" />
                    </div>
                    <button onClick={updateMemeImage} className="btn col-lg-12 mt-3 new-meme-btn">Get a new meme image  🖼</button>
                </div>
            </div>
            
            <div>
                <h1>{memeURL}</h1>
                <img src={memeURL} alt="" />       
            </div>
        </div>
    )
}