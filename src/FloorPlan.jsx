import Kitchen from "./Kitchen"
import Bath from "./Bath"
import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"

function FloorPlan(props){
  return (
    <>
    <Kitchen />
    <Bath size='Half'/>
    <Bath size='Full'/>
    <Bedroom bedNum="1"/>
    <Bedroom bedNum="2"/>
    <Bedroom bedNum="3"/>
    <LivingRoom />
    </>
  )
}

export default FloorPlan