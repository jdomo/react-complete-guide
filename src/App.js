// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      {name: "Kyle", age: 33},
      {name: "Pascal", age: 25},
      {name: "Serge", age: 29},
      {name: "Terence", age: 23},
      {name: "Norm", age: 26},
    ],
    showPersons: false
  }

  age = () => Math.floor(Math.random() * 40);

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      ...this.state,
      persons: [
        {name: "Kyle", age: 33},
        {name: "Pascal", age: 25},
        {name: "Serge", age: 29},
        {name: "Terence", age: 23},
        {name: newName, age: 27},
      ]
    })
  }

  nameChangeHandler = (e) => {
    this.setState( {
      persons: [
        {name: "Kyle", age: 33},
        {name: e.target.value, age: 25},
        {name: "Serge", age: 29},
        {name: "Terence", age: 24},
        {name: this.state.persons[4].name, age: 27},
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState( prevState => ({
        showPersons: !prevState.showPersons
      })
    )
  }

  render() {
    console.log(this.state, '<--state');
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid',
      padding: '8px'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((item, index) => {
              return <Person name={item.name} age={item.age} key={index}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>It me</p>
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