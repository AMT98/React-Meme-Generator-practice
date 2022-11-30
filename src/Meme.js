import MemesData from "./MemesData"
export const Meme = () => {
    const handleMemeBtn = () => {
        const memesArray = MemesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url);
    }
    return (
        <main className="meme">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
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
        </main>
    )
}