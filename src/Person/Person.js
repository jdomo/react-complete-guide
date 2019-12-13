import React from 'react';
import './Person.css'

const person = (props) => {

  const rnd = Math.random();
  console.log(rnd, '<---rnd')
  if (rnd > 0.7) throw new Error('something went wrong');

  return (

    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        {props.children ? <p>{props.children}</p> : null}
        <input type="text" onChange={props.changed} value={props.name}/>
    </div> 
  )
}

export default person;