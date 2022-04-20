import React from "react"
import Alerts from "../services/Alerts";
import "../styles/header.css"

export default function Header(props){
    const logout = () =>{
        Alerts("center", "success", "Logging out", 1000);
        return props.setisLoggedIn(false);
        
    }
    return(<div className="header">
                <h1>This is notes app</h1>
                <h3><a href='#' onClick={logout}>Log out</a></h3>
           </div>
        )
}