import TicketNum from "./ticketNum";
import "./Ticket.css";

export default function Ticket ({ticket}) {
    return (
        <div className="Ticket">
            {
                ticket.map( (ele,idx) =>( 
                    <TicketNum key={idx} num={ele}></TicketNum>
                ))
            }
        </div>
    )
}