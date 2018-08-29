import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table1 from './Table1';
 
var data = [
  { "Sr.No": 1,
    Patient: "Patient1",
    Date: '10/01/2019',
    Time: "12:00"
  },

  {
    'Sr.No': 2,
    Patient: "Patient2",
    Date: '10/01/2019',
    Time: "12:00",
  }, 
  {
    'Sr.No': 3,
    Patient: "Patient3",
    Date: '10/01/2019',
    Time: "12:00",
  }, 
  {
    'Sr.No': 4,
    Patient: "Patient4",
    Date: '10/01/2019',
    Time: "12:00",
  }, 
  {
    'Sr.No': 5,
    Patient: "Patient5",
    Date: '10/01/2019',
    Time: "12:00",
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Doctor Appointment</p>
        <Table1 data={data}/>
      </div>
    );
  }
}
 
export default App;