export default function isMailValid(mail){
    if(mail.includes("@") && mail.includes("gmail.com") ){
        return true
    }
  return false
   
}