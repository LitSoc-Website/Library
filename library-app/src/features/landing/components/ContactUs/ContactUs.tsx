import React from "react";
import './ContactUs.css';
export const ContactUs:React.FC=()=>{
    return(
        <div className="contact-us">
            <h2>Contact Us:</h2>
            <h4>Address</h4>
            <p>1234 Library Lane</p>
            <p>City</p>
            <div className="contact-us-divider"></div>
            <h4>Phone Number</h4>
            <p>123-456-7890</p>
            <div className="contact-us-divider"></div>
            <h4>Email</h4>
            <p>abc@email.com</p>
            
        </div>
    )
}