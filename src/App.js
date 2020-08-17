import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name:'arsene',age:'26'},
      {name:'herve', age:'34'},
    ],
  }

   buttonHandler = () =>{
    this.setState ({
      person:[
        {name:'Karema',age:'25'},
        {name:'herve', age:'24'},
      ]
    })
      
    
  }
  render(){
    return (
      <div className="App">
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>I like eating</Person>
        <button onClick={this.buttonHandler}>click here </button>

      </div>
    );
  }
}

export default App;
