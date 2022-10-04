import React from "react";
import trollFaceIcon from "/src/assets/Troll-Face.svg";

export default function Header(){
    return(
        <div className="navbar">
            <div className="d-flex align-items-center justify-content-between my-3 container">

                <div className="d-flex align-items-center">
                    <img src={trollFaceIcon} alt="troll face image" />
                    <h3 className="mx-2">Meme Generator</h3>
                </div>
                <h6>React Course - Project 3</h6>
                
            </div>
        </div>
    )
}