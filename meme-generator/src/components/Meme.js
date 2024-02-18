import React, { useState } from "react";
import useGenerateRandomMemes from "../hooks/useGenerateRandomMemes";
import "./Meme.css";

const Meme = () => {
  const randomMeme = useGenerateRandomMemes();

  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    randomImageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleInputChange(e) {
    const { value, name } = e.target;

    setMemeData((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getRandommemeData(e) {
    e.preventDefault();
    setMemeData((prevMeme) => ({
      ...prevMeme,
      randomImageUrl: randomMeme.url,
    }));
  }

  return (
    <main>
      <form action="" className="form">
        <input
          type="text"
          className="form-input"
          value={memeData.topText}
          name="topText"
          placeholder="Top Text"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-input"
          value={memeData.bottomText}
          name="bottomText"
          placeholder="Bottom Text"
          onChange={handleInputChange}
        />
        <button className="form-btn" onClick={getRandommemeData}>
          Generate a meme
        </button>
      </form>
      <div className="meme-container">
        <img className="meme-img" src={memeData.randomImageUrl} alt="Meme" />
        <h4 className="meme-top-text">{memeData.topText}</h4>
        <h4 className="meme-bottom-text">{memeData.bottomText}</h4>
      </div>
    </main>
  );
};

export default Meme;
