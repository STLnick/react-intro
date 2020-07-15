import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Courtney', age: 22 },
      { name: 'Nick', age: 27 },
      { name: 'Charlie', age: 4 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'CourtFACE', age: 22 },
        { name: 'Nicholas', age: 27 },
        { name: 'Charles', age: 4 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>Adding another element!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
