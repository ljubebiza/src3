 import React from "react"
 import Note from "./Note"
 
//Iterate trough array and create elements depending of value 
 export default function NoteList(props){
   
   return(
          <div className="notes-list">
            {props.notes.length !== 0 
            ?
            props.notes.map((item, index)=>{
              return  <Note key={index} note={item} />
            })
            :
            <h4><p>No added notes</p></h4>
            }  
          </div>

    )
  }
 