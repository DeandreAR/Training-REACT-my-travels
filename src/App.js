import React, { Component } from 'react';
import logo from './logo.svg';
import Travel from './components/Travel'

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
        <Travel destination="Afrique" country="Madagascar" photo="https://image.noelshack.com/fichiers/2019/13/3/1553702804-decouverte-sud-ouest-madagascar.jpg" distance="15 598 km"/>
        <Travel destination="Afrique" country="La Réunion" photo="https://image.noelshack.com/fichiers/2019/13/3/1553703439-guide-voyage-la-reunion.jpg" distance="25 500 km"/>
        </div>
        );
        }
        }
export default App;
