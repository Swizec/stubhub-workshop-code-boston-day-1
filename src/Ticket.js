import React, { Component } from "react";
import logo from "./logo.svg";
import { format } from "date-fns";

class Ticket extends Component {
    render() {
        const {
            info: { imageUrl, name, description, eventDateLocal }
        } = this.props;

        return (
            <div>
                <img src={imageUrl} style={{ width: "350px" }} />
                <div>
                    <h2>{name}</h2>
                    <p>{format(eventDateLocal, "ddd Do MMMM, hh:mma")}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export { Ticket };
