import './eventcard.css';
import React from 'react';
export default function Eventcard(props){

    return(
        <>

         <div className="section">
        <div className="card">
             <img src={props.img} alt="" />
             <h3><b>Event:</b> {props.name}</h3>
                <h4><b>Venue :</b>{props.price}</h4>

            <h4><b>Date:</b> {props.date}</h4>
            <h4><b>contact :</b>{props.contact}</h4>

<br />
             <a style={{textDecoration:'none'}} href={props.link}>Register</a>
         </div>
         </div>
         </>
    );
} 




