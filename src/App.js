import React, { Component } from "react";
import { Ticket } from "./Ticket";
import data from "./data.json";

console.log(data);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Ticket info={data.events[0]} />
            </div>
        );
    }
}

export default App;
