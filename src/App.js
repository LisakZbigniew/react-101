import React, { Component } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello hi !</h1>
        <div>
          <ExpenseItem/>
          <ExpenseItem/>
        </div>
      </div>
    );
  }
}

export default App;
