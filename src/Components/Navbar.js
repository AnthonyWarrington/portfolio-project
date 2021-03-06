import React from "react";
import logo from "../logo.png";
// React Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons" ;


export const Navbar = () => {
    return (
        // navbar taken from https://getbootstrap.com/docs/4.0/components/navbar/
        // minus some elements
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

                <a className="navbar-brand" href="#"><img src={logo} alt = "logo"></img></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon = {faBars} style = {{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar