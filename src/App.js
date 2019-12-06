// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Person from './Person/Person';
import { classes } from 'istanbul-lib-coverage';

class App extends React.Component {
  state = {
    persons: [
      {id: "sadsfad", name: "Kyle", age: 33},
      {id: "xcvvcvx", name: "Pascal", age: 25},
      {id: "errewrr", name: "Serge", age: 29},
      {id: "dssdfdf", name: "Terence", age: 23},
      {id: "hghgngh", name: "Norm", age: 26},
    ],
    showPersons: false
  }

  age = () => Math.floor(Math.random() * 40);

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();   //slice copies array (arrays are reference type)
    const persons = [...this.state.persons];      //spread operator is an alternative to slice -- spread is more versatile (objects), slice is faster performance-wise
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState( prevState => ({
        showPersons: !prevState.showPersons
      })
    )
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid',
      padding: '8px'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className={this.state.persons.length > 1 ? 'italic' : 'bold'}>
          {this.state.persons.map((item, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={item.name} 
                age={item.age} 
                key={item.id}
                changed={(e)=> this.nameChangeHandler(e, item.id)}/>
          })}
        </div> 
      );

      
    }
    const classes = [];

    if (this.state.persons.length <= 5) classes.push('red');
    if (this.state.persons.length <= 4) classes.push('bold');
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p className={classes.join(' ')}>It me</p>
        <button 
        onClick={this.togglePersonsHandler}
        style={style}
        >Toggle people!</button>
        {persons}
      </div>
      );
    //return React.createElement('div', {className:'App'}, [React.createElement('h1', null, 'hello world'), React.createElement('p', null, 'it me')])
    }
}

//REACT HOOKS - Using state in a functional component

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//       persons: [
//         {name: "Kyle"},
//         {name: "Pascal"},
//         {name: "Serge"},
//         {name: "Terence"},
//         {name: "Norm"},
//       ],
//       otherState: 'some other value'
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       // ...personsState,
//       persons: [
//         {name: "Kyle"},
//         {name: "Pascal"},
//         {name: "Serge"},
//         {name: "Terence"},
//         {name: "Norman"},
//       ],
//     })
//   }

//   const [otherState, setOtherState] = useState('boom boom Jenna');
  
//   const age = () => Math.floor(Math.random() * 40);
//   console.log(personsState, '<--- new personsState')
//   console.log(otherState, '<--- otherState')

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App!</h1>
//       <p>It me</p>
//       <button onClick={switchNameHandler}>Switch the names!</button>
//       <Person name={personsState.persons[0].name} age={age}> Hobbies: Hoopin </Person>
//       <Person name={personsState.persons[1].name} age={age} click={switchNameHandler}/>
//       <Person name={personsState.persons[2].name} age={age}/>
//       <Person name={personsState.persons[3].name} age={age}/>
//       <Person name={personsState.persons[4].name} age={age}/>
//     </div>
//   );
// }



export default App;