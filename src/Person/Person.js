import React from 'react';

const person = (props) =>{
  return (
  <div>
    <h5>I'm {props.name} and I'm {props.age} years old</h5>
  <p>{props.children}</p>
  </div>
  )
};

export default person;