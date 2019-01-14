import React, { Component } from 'react';
import './App.css';
import BubblingProblem from './component/BubblingProblem';
import BubblingSolution from './component/BubblingSolution';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BubblingProblem />
        <BubblingSolution />
      </div>
    );
  }
}

export default App;
