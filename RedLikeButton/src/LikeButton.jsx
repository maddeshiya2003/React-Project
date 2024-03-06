import { useState } from "react"

export default function LikeButton () {

    let [isLiked,setIsLiked] = useState(false);

    let clicked = () => {
        setIsLiked(!isLiked);
    }

    return (
        <>
            <h1>Click This Heart Button</h1>
            <h1 onClick={clicked}>{isLiked? <i className="fa-solid fa-heart likeButton"></i> : <i className="fa-regular fa-heart unlikeButton"></i> } </h1>
        </>
    )
}