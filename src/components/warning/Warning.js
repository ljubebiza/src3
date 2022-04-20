import "./styles.css"

export default function Warning(props){
    return (
        <div className="warning">
            <h4>{props.text}</h4>
        </div>
    )
}