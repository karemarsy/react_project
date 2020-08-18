import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name:'arsene',age:'26'},
      {name:'herve', age:'34'},
      {name:'lewis', age:'34'},
    ],
    personShow: false
  }

   buttonHandler = (newName) =>{
    this.setState ({
      person:[
        {name:newName,age:'25'},
        {name:'herve', age:'24'},
        {name:'lewis', age:'34'},
      ]
    })
  }

  togglePersonsHandler = () =>{
   const doesShow = this.state.personShow;
   this.setState ({personShow : !doesShow});
  }

  nameChangeHandler = (event) =>{
    this.setState ({
      person:[
        {name: event.target.value,age:'25'},
        {name:'herve', age:'24'},
        {name:'lewis', age:'34'},
      ]
    })
  }
  render(){

    let persons = null;
    if (this.state.personShow){
      persons = (
        <div>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} changed={this.nameChangeHandler}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>
        </div> 
      );

    }
    return (
      <div className="App">

        <button onClick={this.togglePersonsHandler}>click here </button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;

