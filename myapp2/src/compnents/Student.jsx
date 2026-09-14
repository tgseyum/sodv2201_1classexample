export function Student(props){
    const student1 = "Aron";
    const age = 20

  return(
    <>
      <p>Student detail </p>
      <p>First name {student1}</p>
      <p>Age {age}</p>
      <p>Adress {props.address}</p>
      <p>Dept{props.dept}</p>
      <p>Term  {props.term}</p>
      <p>{props.children}</p>
    </>
  )
}