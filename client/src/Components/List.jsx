const List=(props)=>{
    const {title,description}=props
    return(
        <div className="list">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    )
}
export default List