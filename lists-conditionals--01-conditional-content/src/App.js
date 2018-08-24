import React, { Component } from 'react';
import classes from './App.css';
//import Radium,{StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id : '1',name: 'Max', age: 28 },
      { id : '2',name: 'Manu', age: 29 },
      { id : '3',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {
    ...this.state.persons[personIndex]
    };
    //const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons : persons} );
  }

  deletePersonHandler = (personIndex)=>{
    //const person = this.state.persons
    //const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({persons:person});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    let btnClass = '';
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click = { () => this.deletePersonHandler(index)}
            key = {person.id}
            name = {person.name}
            age = {person.age}
            changed = {(event) => this.nameChangedHandler(event,person.id)}
            />
          })}
        </div>
      );
      btnClass = classes.Red;
      style.backgroundColor = 'red';
    };
    //let classes = ['red','bold'].join(' ');
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
      
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className = {btnClass}
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
     
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
