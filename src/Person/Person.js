import React from 'react';
import './Person.css'

const person = (props) => {
  const style = {
    color: 'red',
    '@media (max-width: 800px)': {
      color: 'blue'
    }
  }

  return (
    <div className="Person">  
        <p onClick={props.click} style={style}>I'm {props.name} and I am {props.age} years old!</p>
        {props.children ? <p>{props.children}</p> : null}
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  )
}

export default person;