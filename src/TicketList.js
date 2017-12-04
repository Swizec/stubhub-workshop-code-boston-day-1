import React from "react";
import { Ticket } from "./Ticket";

const TicketList = ({ tickets, N }) => (
    <React.Fragment>
        {tickets
            .slice(0, N)
            .map(ticket => <Ticket info={ticket} key={ticket.id} />)}
    </React.Fragment>
);

export { TicketList };
