import style from "./About.module.css" 
import style1 from "./Course.module.css"

function About(){
    const styleh2= {
        color:"blue",
        backgroundColor:"gray",
        padding:"20px"
    }
    return(
        <div className={style.container}>
            <div className={style1.container}> some text</div>
            <h2 className="title">Main title</h2>
            <h2 style={{color:"red"}}>About page</h2>
            <div style={{backgroundColor:"gray", color:"white", border:"solid red 1px"}}>This is about page</div>
           
            <h2 style={styleh2}>You can learn more about as everyday....l</h2>
            <p id="content">We are term 3 students learning react ...</p>
        </div>
    )
}
export default About