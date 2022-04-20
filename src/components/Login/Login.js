import "./styles.css"
import {useState} from "react"
import Alerts from "../../services/Alerts"
import Warning from "../warning/Warning"
import validUsage from "../../services/validUsage"

export default function Login(props){
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [wrongValidation, setWrongValidation]= useState(false)
    const userData =[
        {
            email:"example@gmail.com",
            password:"test1"   
        },
        {
          email:"example1@gmail.com",
          password:"test2"
        }
    ];
   
    const handleForm = ()=>{
        if(!validUsage(password, email)){
            return
        }
        const user = userData.filter((data)=>{
            return data.email === email && data.password === password;
        })
        if(user.length > 0){
            Alerts("center", "success", "You are succsessfully logged in", 2000)
            props.setisLoggedIn(true);
           
        }
        else{
            props.setisLoggedIn(false);
            setWrongValidation(true)
        }
        
    }
   
    return(
        <div className="login">
         <input type="text"
          placeholder="Enter your e-mail"
          onChange={(event) =>  setEmail(event.target.value)}  
         />

         <input type="password"
          placeholder="Enter your password"
          onChange={(event) =>  setPassword(event.target.value)} 
        />
         <button onClick={handleForm}>Sign in</button>
          {wrongValidation && ( <Warning text={"Invalid mail or password"} />)}
        </div>
    )
}