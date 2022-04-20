import "./styles.css"

export default function InputForm(props){

    return(
        <div className={props.className}>
        <input
            id={props.id0} 
            type={props.type0}
            placeholder={props.placeholder0}
            onChange={props.fanc0}>
        </input>
        <input 
            id={props.id1} 
            type={props.type1} 
            placeholder={props.placeholder1} 
            onChange={props.fanc1}>
        </input>
        <button 
            onClick={props.fanc2}>
            {props.btnText}
        </button>
    </div>
    )
}