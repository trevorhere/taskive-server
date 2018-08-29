import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getLists = () => {
    console.log('get Lists hit')
    fetch('http://localhost:5000/api/list', {
      method: 'get',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getLists}>get Lists</button>
      </div>
    );
  }
}

export default App;
