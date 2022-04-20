
export default function InputField(props){
    
    return(
        <input 
        id={props.id}
        type={props.type}
         placeholder={props.placeholder}
         onChange={props.func}
         />
    )
}