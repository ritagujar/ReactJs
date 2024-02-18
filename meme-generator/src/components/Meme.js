import React, { useState } from "react";
import useGenerateRandomMemes from "../hooks/useGenerateRandomMemes";

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

  // console.log(memeData.topText);
  // console.log(memeData.bottomText);

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
          className="top-text"
          value={memeData.topText}
          name="topText"
          placeholder="Top Text"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="bottom-text"
          value={memeData.bottomText}
          name="bottomText"
          placeholder="Bottom Text"
          onChange={handleInputChange}
        />
        <button onClick={getRandommemeData}>Generate a meme</button>
      </form>
      {/* <img src={memeData.randomImageUrl} alt="Meme" /> */}
    </main>
  );
};

export default Meme;
