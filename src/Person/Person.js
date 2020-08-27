import React from 'react';
import Radium from 'radium'

const person = (props) =>{
  const style = {
    '@media (min-width: 500px)':{
    width:'450px'
    }
  };
  return (
  <div style={style}>
    <h5 onClick= {props.Click}>I'm {props.name} and I'm {props.age} years old</h5>
  <p>{props.children}</p>
  </div>
  )
};

export default Radium(person);