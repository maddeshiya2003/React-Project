import "./Lottery.css";

export default function PlayButton({action}) {
    return <button className="btn" onClick={action}>Click To Play</button>
}