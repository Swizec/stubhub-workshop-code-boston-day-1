import React, { Component } from "react";
import logo from "./logo.svg";

class Ticket extends Component {
    render() {
        return (
            <div>
                <img src={logo} style={{ width: "150px" }} />
                <div>
                    <h2>Ticket title</h2>
                    <p>Ticket description</p>
                </div>
            </div>
        );
    }
}

export { Ticket };
