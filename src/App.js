import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as FBase from './services/firebase'

class App extends Component {

  componentDidMount () {
    FBase.init()
  }

  async _signIn () {
    const result = await FBase.login()
    console.log(result.user)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this._signIn()}>
          Sign in
        </button>
      </div>
    );
  }
}

export default App;
