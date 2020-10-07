import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


class Navbar extends React.Component{
constructor(props){
    super(props);
    this.state = {

    }
}


render(){
    return(
        <nav>
            <img src="/assets/logo.jpg"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

}

export default Navbar;