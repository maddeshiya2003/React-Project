import { useState } from "react";
import "./Lottery.css";
import { genetateRandomNumber,sum } from "./helper";
import Ticket from "./Ticket";
import PlayButton from "./PlayButton";

export default function Lottery({n=3,winningFunction}) {

    let [ticket,setTicket] = useState([0,0,0]);

    function genetateRandomNo () {
        ticket = genetateRandomNumber(n);
        setTicket([...ticket]);
    }

    return (
        <div className="lottery">

            <h2> Lottery Game ! </h2>
            <h1>{winningFunction(ticket)?"You Win": ""}</h1>
            <PlayButton action={genetateRandomNo}></PlayButton>
            <Ticket ticket={ticket}></Ticket>
            
        </div>
    );
}