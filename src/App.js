import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import tick from './tick.wav';
import Tick from './Tick';
//var sound = require('Sound');
//import sound from './DirectSound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Metronome</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Tick />
        {/* playStatus=Sound.status.PLAYING */}
      </div>
    );
  }
}

export default App;
