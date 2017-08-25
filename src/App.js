import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }
  reduce () {
    this.setState({
      count: this.state.count - 1
    })
  }
  increase () {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{ this.state.count }</h1>
        <button onClick={() => {this.increase()}}>+</button>
        <button onClick={() => {this.reduce()}}>-</button>
      </div>
    );
  }
}

export default App;
