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
    return (
        <main className="meme">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                    // {meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
            </div>
                <button 
                    className="form--button"
                    onClick={handleMemeBtn}
                >
                    Get a new meme image 🖼
                </button>
                <img className="memeImage" src={meme.randomImage}  alt="memeImage"/>
        </main>
    )
}