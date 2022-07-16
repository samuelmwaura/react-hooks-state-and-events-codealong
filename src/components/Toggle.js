import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  return <button onClick={()=>setIsOn(!isOn)} style={{background:isOn?'red':'white'}}>{isOn?'ON':'OFF'}</button>;
}

export default Toggle;
//Heavy use oisOn?'red':'white of ternary expression for the comparison logic