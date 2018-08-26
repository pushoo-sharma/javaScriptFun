import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      header : "This is from header state...",
      data : [
        {
          "id" : 1,
          "name" : "a",
          "age" : 19
        },
        {
          "id" : 2,
          "name" : "b",
          "age" : 20
        },
        {
          "id" : 3,
          "name" : "c",
          "age" : 21
        }
      ]
    }
  }
  render() {
    var i = 1;
    var myStyle = {
      color : 'blue',
      fontSize : 100
    };
    return (
      <div>
        <h1>Hello</h1>
        <h2>React</h2>
        <p data-myattribute = "somevalue">I am learning react :)</p>
        <p>{1+1}</p>
        <h1 style = {myStyle}>{/*i === 1 ? "True" : "False"*/}</h1>
        <hr></hr>
        <About/>
        <Learning/>
        <table>
          <tbody>
          {this.state.data.map((person,i)=>
          <TableRow  key = {i}
          data = {person}/>)}
          </tbody>
          <footer>
          <p>{this.state.header}</p>
          </footer>
        </table>
      </div>
    );
  }
}
class About extends React.Component {
  render(){
    return (
      <div>
        <h1>About</h1>
        <p>This is about React</p>
      </div>
    );
  }
}
class Learning extends React.Component {
  render(){
    return (
      <div>
        <h1>Learning</h1>
        <p>This is learning React and implementing it</p>
      </div>
    );
  }
}
class TableRow extends React.Component{
  render(){
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
export default App;
