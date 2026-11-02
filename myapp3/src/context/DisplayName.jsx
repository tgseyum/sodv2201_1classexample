import { useContext } from "react"
import { NameContext } from "./NameContext"
function DeisplayName(){
    const namelist = useContext(NameContext)
    return(
        <div>
            <p>Name:{namelist.fullanme}</p>
        </div>
    )
}
export default DeisplayName