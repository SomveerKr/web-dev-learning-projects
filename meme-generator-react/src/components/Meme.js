import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26jxvz.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);
  //Fetching memesData from an API
  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((memesData) => setAllMemes(memesData.data.memes));
  // }, []);
  //Using async function
  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);
  function handleClick() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomMeme.url
      };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }
  return (
    <main>
      <div className="form">
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Shut Up"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="and take my money"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>
          Get a new meme image{" "}
          <span role="img" aria-label="framed photo emoji">
            🖼️
          </span>
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="memeImg" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
