import React from "react";
import { useEffect } from "react";
import MemeImageSection from "./MemeImageSection.jsx";

export default function Form() {

  const [memesArray, setMemesArray] = React.useState([]);
  console.log("form page is rendered");

 /* Fetching the memes from the API and setting the memesArray state to the data.data.memes array. */
  useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
          .then((res)=>res.json())
          .then((data)=>setMemesArray(data.data.memes))
  }, [])
          
  /**
   * It takes a random index from the memesArray and returns the url of the meme at that index.
   * @returns The URL of a random meme.
   */
  function getAMemeURL() {
    let randomIndex = Math.floor(Math.random() * memesArray.length);
    let randomMemeURL = memesArray[randomIndex].url;
    return randomMemeURL;
  }

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeURL: "http://i.imgflip.com/1bij.jpg",
  });

/**
 * When the form changes, set the meme state to the previous state, and then update the meme state with
 * the new value.
 */
  function handleFormChanges(event){
    let {name, value} = event.target;
    setMeme(prevState=>(
      {
        ...prevState,
        [name]: value
      }
    ))
  }

  /**
   * When the user clicks the button, update the state of the memeURL variable to a new random meme URL.
   */
  function updateMemeURLState() {
    setMeme((prevState) => ({
      ...prevState,
      memeURL: getAMemeURL(),
    }));
  }

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="col-lg-8 mt-5">
          <div className="d-flex justify-content-between">
            <input
              className="form-control "
              type="text"
              placeholder="Top Text"
              id="toptext-field"
              name="topText"
              value={meme.topText}
              onChange={handleFormChanges}
            />
            <span className="mx-3"></span>
            <input
              className="form-control "
              type="text"
              placeholder="Bottom Text"
              id="bottomtext-field"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleFormChanges}
            />
          </div>
          <button
            onClick={updateMemeURLState}
            className="btn col-lg-12 mt-3 new-meme-btn"
          >
            Get a new meme image 🖼
          </button>
        </div>
      </div>

      <MemeImageSection meme={meme} />
    </div>
  );
}
