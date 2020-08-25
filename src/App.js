import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {id:1, name:'arsene',age:'26'},
      {id:2,name:'herve', age:'34'},
      {id:3,name:'lewis', age:'34'},
    ],
    personShow: false
  }

   deletePersonHandler =(personIndex) =>{
     const person = this.state.person
     person.splice(personIndex, 1);
     this.setState({persons: Person})

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
          {this.state.person.map ((arsene, index) => {
            return (<Person Click={ ()=>this.deletePersonHandler(index)} name={arsene.name} age={arsene.age} key={arsene.id}/>)
          })}
        </div> 
      );

    }

    const classes = [];
    if(this.state.person.length <=2 ){
      classes.push('red');
    }
    if(this.state.person.length<= 1){
      classes.push('bold','red');
    }
    return (
      <div className="App">

<h1>hi everyone</h1>
<p className={classes.join (' ')}>change colors</p>       
<button onClick={this.togglePersonsHandler}>click here </button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;

