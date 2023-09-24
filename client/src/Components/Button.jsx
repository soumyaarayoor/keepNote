import "./Button.css";


const Button=(props)=>{
    const {label,type,onClick}=props
    return(
        <button onClick={onClick} type={type}>{label}</button>
    )
}

export default Button