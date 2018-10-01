import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import Items from './Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Items />
      </div>
    );
  }
}

export default App;
