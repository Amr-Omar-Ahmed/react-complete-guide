import React, { Component } from 'react';
import './App.css';
import CockPit from '../components/Cockpit/CockPit';
import Person from '../components/Persons/persons';
//class is stateful
class App extends Component {

  state = {
    persons: [
      {id:'ssdsdad', name: 'amr', age: '25' },
      {id:'sdada', name: 'omar', age: '27' },
      {id:'sfasfdf', name: 'ahmed', age: '30' },
    ],
    showPerson: true
  }
  showPersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }
  deletePersonHandler =(personIndex)=>{
    // const persons= this.state.persons;
    // persons.splice(personIndex,1);
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }
  changeNameHandler = (event,personId)=>{
      const personIndex = this.state.persons.findIndex((pers)=>{
          return pers.id === personId;
      });
      
      const person = {...this.state.persons[personIndex]};
      person.name=event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex]= person;

      this.setState({persons:persons})
  }
  render() {
    
    let personsApp = null;
    if (this.state.showPerson) {
      personsApp = (
        <Person 
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
          personsState={this.state.persons}      
        />
      );
    }
    return (
      <div className="App" >
      <CockPit 
        clicked={this.showPersonsHandler}
      />
          {personsApp}
      </div >
    );
  }
}

export default App;
