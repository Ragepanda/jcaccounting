import React from "react";
import "./Contact.css"
import { Link } from "react-router-dom";


class Contact extends React.Component{
constructor(props){
    super(props);
    this.state = {

    }
}


render(){
    return(
        <div id="contact">
            <h1>Contact Us</h1>
            <form>
                <label for="name">Name</label>
                <input name="name" type="text"/>
                <br/>
                <label>Phone Number</label>
                <input name="phone-number" type="text"/>
                <br/>
                <label>E-mail Address</label>
                <input name="e-mail" type="text"/>
                <br/>
                <label>Message</label>
                <textarea name="message" type="text"/>
                <br/>
                <input name="button" type="button" value="Submit"/>
                
            </form>
        </div>
    )
}

}

export default Contact;