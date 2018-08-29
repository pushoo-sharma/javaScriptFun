import React from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
export default class Example extends React.Component {
    handleOnclickEvent = (event) =>{
        console.log("Cancel On"+event.target.id)
    };
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>    </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Patient1</td>
            <td>12/01/19</td>
            <td>1:00 P.M</td>
            <td className="text-danger" id = "1" onClick = {this.handleOnclickEvent}>Cancel</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Patient2</td>
            <td>13/02/19</td>
            <td>1:00 P.M</td>
            <td className="text-danger" id = {Date.now()} onClick = {this.handleOnclickEvent}>Cancel</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Patient3</td>
            <td>14/02/19</td>
            <td>1:00 P.M</td>
            <td className="text-danger" id = {Date.now()} onClick = {this.handleOnclickEvent}>Cancel</td>
          </tr>
        </tbody>
      </Table>
     
    );
  }
}