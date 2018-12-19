import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        // <div>
        //   < Person
        //     name={this.state.persons[0].name}
        //     age={this.state.persons[0].age} />
        //   <Person
        //     name={this.state.persons[1].name}
        //     age={this.state.persons[1].age}>My Hobbies are playing football</Person>
        //   <Person
        //     name={this.state.persons[0].name}
        //     age={this.state.persons[0].age}>My Hobbies are playing football</Person>
        // </div>
        <div>
        {this.state.persons.map((person,index)=>{
          return <Person 
          click={()=> this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=> this.changeNameHandler(event,person.id)}

            />
        })}
        </div>
      );
    }
    return (
      <div className="App" >
        <h1> Hello everyone from my react app</h1>
        <button style={styleBtn} onClick={() => this.showPersonsHandler()}> Toggle persons</button >
        {/* {this.state.showPerson === true ? 
           <div>
            < Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>My Hobbies are playing football</Person>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}>My Hobbies are playing football</Person>
          </div> 
          : null} */}
          
          {persons}
      </div >
    );
  }
}

export default App;
