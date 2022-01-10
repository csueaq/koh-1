import React, { useState, useEffect } from 'react';
import * as Store from '../util/store'
import Persona from './profile/persona'
import Pokemon from './profile/pokemon'
const setPersona = (persona, setPersona) => setPersona(persona)


export default (props)=> {
    const [persona, setPersona] = useState(null);
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        if(persona && pokemon) {
            props.setProfile({pokemon, persona})
            Store.CreateStoredProfile({pokemon, persona})
        }
    })

    return <>
        <h1>haha</h1>
        <h1>{props.session}</h1>
        {!persona && <Persona setPersona={setPersona}/>}
        {persona && !pokemon && <Pokemon setPokemon={setPokemon}/>}
    </>
}