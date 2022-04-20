
export default function isPaswordValid(password){
//Check if minimum characters and if letters only
    if(password.length < 8 || /^[a-zA-Z]+$/.test(password)){
            return false
        }
      return true 
}