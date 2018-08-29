import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table1 from "./Doctor";
class App extends Component {
  render() {
    return (
        <div className="App">
          <p className="Table-header">Doctor Appointment</p>
          <Table1/>
        </div>
    );
  }
}

export default App;
