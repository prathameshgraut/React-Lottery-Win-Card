import { useState } from "react"
import "./Lottery.css";
// import genTicket from "./helper";
// import sum from"./helper";
import {genTicket,sum} from "./helper";

export default function Lottery(){
    let[ticket,setTicket]=useState(genTicket(3));
    let isWinnig = sum(ticket) == 15;
    let buyTicket= () =>{
        setTicket(genTicket(3));
    }

    return(
        <div className="box">
            <h2>Lottery Game !..</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button className="button" onClick={buyTicket}>Buy New Ticket</button>
            <h3 className="h3">{isWinnig && "Congratulation , you won!"}</h3>
        </div>
    )
}