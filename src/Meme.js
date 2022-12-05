import MemesData from "./MemesData"
import React, { useState } from 'react';

export const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(MemesData)

    const handleMemeBtn = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme((prevState => {
            return {
                ...prevState ,
                randomImage : url

            }
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    return (
        <main className="meme">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                    name = "topText"
                    value = {meme.topText}
                    onChange = {handleChange}
                    />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange = {handleChange}
                />
            </div>
                <button 
                    className="form--button"
                    onClick={handleMemeBtn}
                >
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img className="memeImage" src={meme.randomImage}  alt="memeImage"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}


