import isMailValid from "./isMailValid";
import isPaswordValid from "./isPasswordValid"
import infoAlerts from "./infoAlerts";

export default function validUsage(password, email){
   if(!password.includes(" ") && !email.includes(" ")){

        if(!isMailValid(email)){
           infoAlerts("top-end", "warning",
         "Adress must contain name, @, domain name and domain: example@gmail.com");
         return false;
        }
        if(!isPaswordValid(password)){
         infoAlerts("top-end", "warning", 
         "Password must be at least 8 characters long and contain number or other non letter characters");
         return false
        }
   }
   else{
       infoAlerts("top-end", "warning", "No white space allowed");
    return false
   }
   return true;
   
}