import React from "react";

export default (props) => <>
    <h1>Pick you Pokemon</h1>
    <ul>
        <li onClick={()=> props.setPokemon("bulbasaur")}>
            bulbasaur
        </li>
        <li  onClick={()=> props.setPokemon("charmander")}>
            charmander
        </li>
        <li  onClick={()=> props.setPokemon("squirtle")}>
            squirtle
        </li>
    </ul>
</>