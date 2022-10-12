import Kitchen from "./Kitchen"
import Bath from "./Bath"

function FloorPlan(props){
  return (
    <>
    <Kitchen />
    <Bath size='Half'/>
    <Bath size='Full'/>
    </>
  )
}

export default FloorPlan