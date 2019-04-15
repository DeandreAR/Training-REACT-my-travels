import React, { Component } from 'react';
import logo from './logo.svg';
import Travel from './components/Travel'
import Travels from './components/Travels.json'
import BannierGame from './components/BannierGame';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <div className="destination1">
      </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        {Travels.map(travel =>(
        <Travel {...travel}/>
       ))}
        </div>
    );
        }
      }
        
export default App;
