import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/hyf.png"

const Header = () => {
    return (
        <header className="header">
            <div className="logo_container">
            <img src="https://i.postimg.cc/6qCBxm3M/images.jpg" id="logo" alt="App logo" height="100" width="100"></img>
            </div>
            <ul className="navigation">
                <Link to={"/"}>  <li>Home</li></Link>
                <Link to={"/meals"}>  <li>Meals</li></Link>
                <Link to={"/meals/addmeal"}>  <li>Become a host?</li></Link>
            </ul>
        </header>
    )
}

export default Header;