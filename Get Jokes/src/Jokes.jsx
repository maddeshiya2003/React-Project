import { useEffect, useState } from "react";
import "./Jokes.css"

export default function Jokes() {
    let URL = "https://official-joke-api.appspot.com/random_joke";
    
    let [joke,setJoke] = useState({})

    async function getNewJokes() {
        let res = await fetch(URL);
        let jsonRes = await res.json();
        setJoke(jsonRes);
    }

    useEffect(() => {
        async function firstGetNewJokes() {
            let res = await fetch(URL);
            let jsonRes = await res.json();
            setJoke(jsonRes);
        }
        firstGetNewJokes();
    },[]);

    return (
        <div>
            <h2 className="punchline">{joke.punchline}</h2>
            <h3 className="setup">{joke.setup}</h3>
            <button className="btn" onClick={getNewJokes}>Get Joke</button>
        </div>
    )
}