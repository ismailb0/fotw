import React, { Component } from 'react';
import WorldChartBlock from './components/WorldChartBlock'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Test </h1>
        </header>
        <div className="page-content">
          <WorldChartBlock />
        </div>
      </div>
    );
  }
}

export default App;
