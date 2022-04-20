import React from "react";
import { useState } from "react";
import Login from "./components/Login/Login";
import NoteApp from "./components/NoteApp";



export default function App(){
  const [isLoggedIn, setisLoggedIn] = useState(false)
  
  return(
    <>
      {!isLoggedIn && (<Login setisLoggedIn={setisLoggedIn} />)}
      {isLoggedIn && (<NoteApp setisLoggedIn={setisLoggedIn} />)}
    </>
  )

}