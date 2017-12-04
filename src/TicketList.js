import React from "react";
import { Ticket } from "./Ticket";

const TicketList = ({ tickets, N, hideTicket }) => (
    <React.Fragment>
        {tickets
            .slice(0, N)
            .map(ticket => (
                <Ticket info={ticket} key={ticket.id} hideTicket={hideTicket} />
            ))}
    </React.Fragment>
);

export { TicketList };
