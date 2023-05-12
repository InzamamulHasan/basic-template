let Section=(props)=>{
    return (
        <div className="section">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {props.children}
        </div>
    )
}
export default Section;