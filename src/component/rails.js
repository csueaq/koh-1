import React from "react";

export default (props)=> {
    return <>
        <h1>{props.profile.persona}</h1>
        <h1>{props.profile.pokemon}</h1>
        <h1>{JSON.stringify(props.counter)}</h1>
    </>
}