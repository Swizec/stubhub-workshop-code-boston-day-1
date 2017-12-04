import React, { Component } from "react";
import { Ticket } from "./Ticket";
import { TicketList } from "./TicketList";
import data from "./data.json";

class App extends Component {
    state = {
        N: 3,
        hiddenTickets: []
    };

    more = () =>
        this.setState({
            N: this.state.N + 1
        });

    less = () =>
        this.setState({
            N: this.state.N - 1
        });

    hideTicket = ({ id }) => {
        const { hiddenTickets } = this.state;
        this.setState({
            hiddenTickets: hiddenTickets.concat(id)
        });
    };

    render() {
        const { N, hiddenTickets } = this.state;

        const tickets = data.events.filter(
            ({ id }) => !hiddenTickets.includes(id)
        );

        return (
            <div className="App">
                <button onClick={this.more}>More</button>
                {N > 0 ? <button onClick={this.less}>Less</button> : null}
                <TicketList
                    tickets={tickets}
                    N={N}
                    hideTicket={this.hideTicket}
                />
            </div>
        );
    }
}

export default App;
