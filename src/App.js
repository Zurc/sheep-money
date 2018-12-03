import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Balances from './Balances/Balances';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Balances/>
      </div>
    );
  }
}

export default App;
