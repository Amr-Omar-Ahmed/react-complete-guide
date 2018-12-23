import React from 'react';
import './Person.module.css'

// We can't use state here as we create the component as function 
//so function is stateless
const person =(props)=>{
    return (
        <div className="Person">
            <p id='nameAge' onClick={props.click}>My name is <strong>{props.name}</strong> and my age is <strong>{props.age}</strong> </p>
            <p>{props.children}</p>
            {/* <input type="text" onChange={props.changed} value={props.name} /> */}
            <input type="text" onChange={props.changed} placeholder={props.name} />
        </div>
    );
}

export default person;