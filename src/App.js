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

   buttonHandler = (newName) =>{
    this.setState ({
      person:[
        {name:newName,age:'25'},
        {name:'herve', age:'24'},
      ]
    })
  }

  nameChangeHandler = (event) =>{
    this.setState ({
      person:[
        {name: event.target.value,age:'25'},
        {name:'herve', age:'24'},
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <Person name={this.state.person[0].name} age={this.state.person[0].age} changed={this.nameChangeHandler}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} Click={this.buttonHandler.bind(this, 'joha90')}>I like eating</Person>
        <button onClick={this.buttonHandler.bind(this, 'johani')}>click here </button>
      </div>
    );
  }
}

export default App;
