export function Course(props){
    return(
        <>
            <h3>Course detail</h3>
            <p>{props.cname}</p>
            <p>{props.crdt}</p>
        </>
    )
}