import React from "react";
import "../styles/note.css"

export default function Note(props){

    return(
        
            <div className="note">
               
                <div className="content">
                    <input type={"checkbox"}></input>
                    <h5>{props.note.heading}</h5>
                    <p>{props.note.textContent}</p>
                </div>
            </div>
        
    )
}
