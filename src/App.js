import React, { Component } from "react";
import { Ticket } from "./Ticket";
import { TicketList } from "./TicketList";
import data from "./data.json";

class App extends Component {
    render() {
        return (
            <div className="App">
                <button onClick={this.more}>More</button>
                <TicketList tickets={data.events} N={3} />
            </div>
        );
    }
}

export default App;
