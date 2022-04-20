import "../styles/main.css";
import Header from "./Header";
import NoteList from  "./NoteList";
import {useState} from "react";
import Alerts from "../services/Alerts";
import clearText from "../services/ClearInputField";
import { compareNotes } from "../services/IsObjectInArray";
import InputForm from "./InputForm/InputForm";
import Warning from "./warning/Warning";
import isFieldEmpty from "../services/isFieldEmpty";


export default function NoteApp(props){
     // Store values
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [forbidenWords, setforbidenWords] = useState(false)
  // Functions to get values from input 
  const getTitle = (e)=>{
  setTitle(e.target.value);

  }

  const getContent = (e)=>{
     setContent(e.target.value);
    
  }

  //Append input value to array and handle edge cases
  const createNote = () =>{
    if(!isFieldEmpty(title) && !isFieldEmpty(content)){
      const note = {
        heading: title,
        textContent: content
      }

      if(compareNotes(notes, note)){
        setforbidenWords(true);
      }
      else{
        setNotes([...notes, note]);
        setforbidenWords(false);

        clearText("title", "content");
        setTitle("")
        setContent("")
        
        // put alerts
        Alerts("center", "success", "Note added succssesfully", 2000)
    
      } 
    }
    else{
      Alerts("center", "error", "Missing text in field", 3000)
      
    }
    
    
  }
  
    return(
        <>
        
            <Header setisLoggedIn={props.setisLoggedIn} />
            <NoteList notes={notes} />
            <hr />
                <InputForm 
                    className={"input-form"}
                    id0={"title"}
                    id1={"content"}
                    type0={"text"} 
                    type1={"text"}
                    placeholder0={"Title"}
                    placeholder1={"Content"} 
                    fanc0={(event)=>{getTitle(event)}}
                    fanc1={(event)=>{getContent(event)}} 
                    fanc2={createNote}
                    btnText={"Create"}
                />
            
                <div className="error">
                    {forbidenWords ? <Warning text={"Note already created"} />: ""}
            </div>
            
        </>
    )
}