import React, { Component } from "react";
import { Ticket } from "./Ticket";
import { TicketList } from "./TicketList";
import data from "./data.json";

class App extends Component {
    state = {
        N: 3
    };

    more = () =>
        this.setState({
            N: this.state.N + 1
        });

    less = () =>
        this.setState({
            N: this.state.N - 1
        });

    render() {
        const { N } = this.state;

        return (
            <div className="App">
                <button onClick={this.more}>More</button>
                {N > 0 ? <button onClick={this.less}>Less</button> : null}
                <TicketList tickets={data.events} N={N} />
            </div>
        );
    }
}

export default App;
