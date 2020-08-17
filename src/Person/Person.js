import React from 'react';

const person = (props) =>{
  return (
  <div>
    <h5 onClick= {props.Click}>I'm {props.name} and I'm {props.age} years old</h5>
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.name}></input>
  </div>
  )
};

export default person;