import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
    render() {
        return (
            <>
                <div id="nav">
                    <br />
                    <ul>
                        <li className="one">Qtrip</li>
                        <Link to="/"><li className="two">Home</li></Link>
                        <Link>  <li className="two1">Reservation</li></Link>
                        <Link> <li className="two1">Login Here</li></Link>
                        <Link> <li className="two1"><button id="btn1">Register</button></li></Link>
                    </ul>
                </div>
                <br />
            </>

        )
    }
}