import React, { Component } from "react";
import logo from "./logo.svg";
import { format } from "date-fns";

class Ticket extends Component {
    state = {
        N: 0
    };

    inc = () =>
        this.setState({
            N: this.state.N + 1
        });

    render() {
        const {
            info: { imageUrl, name, description, eventDateLocal }
        } = this.props;

        return (
            <div onClick={this.inc}>
                <img src={imageUrl} style={{ width: "350px" }} />
                <div>
                    <h2>
                        {name} - <span>{this.state.N}</span>
                    </h2>
                    <p>{format(eventDateLocal, "ddd Do MMMM, hh:mma")}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export { Ticket };
