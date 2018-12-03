import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const contacts = [
  {name: 'Everton', email: 'ehokeverton@gmail.com'},
  {name: 'Karine', email:'karinewagner@gmail.com'},
  {name: 'Rodrigo', email:'rodrigokunz@gmail.com'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Introdução ao React (Components/Props/State)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <ol>
          {
            contacts.map(c => <li>{c.name}</li>)
          }
        </ol>
      </div>
    );
  }
}

export default App;
