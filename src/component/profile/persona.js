import React from "react";

export default (props) => <>
    <h1>Pick you Persona</h1>
    <ul>
        <li onClick={()=> props.setPersona("mario")}>
            mario
        </li>
        <li  onClick={()=> props.setPersona("ash")}>
            ash
        </li>
    </ul>
</>