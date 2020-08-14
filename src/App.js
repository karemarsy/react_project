import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ personsState , setPersonsState]= useState[{
    person:[
      {name:'arsene',age:'26'},
      {name:'herve', age:'34'},
    ]
  }];

  const buttonHandler = () =>{
    setPersonsState ({
      Person:[
        {name:'Karema',age:'25'},
        {name:'herve', age:'24'},
      ]
    })
  }
    return (
      <div className="App">
        <Person name={personsState.Person[0].name} age={personsState.Person[0].age}></Person>
        <Person name={personsState.Person[1].name} age={personsState.Person[1].age}>I like eating</Person>
        <button onClick={buttonHandler}>click here </button>

      </div>
    );
}

export default App;
