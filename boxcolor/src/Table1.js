import React, { Component } from 'react';
// import {BootstrapTable, 
//        TableHeaderColumn} from 'react-bootstrap-table';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import BootstrapTable from 'react-bootstrap-table-next';
//require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');       
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';     
import { Table } from 'react-bootstrap';
import './Table1.css';
//import '../css/Table.css';
//import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        {/* <BootstrapTable data={this.props.data} border = '11px solid black' version = '4'>
          <TableHeaderColumn isKey dataField='Sr.No' width = '65px'>
            Sr.No
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Patient'  width = '65px'>
            Patient
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Date' width = '65px'>
            Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Time' width = '65px'>
            Time
          </TableHeaderColumn>
        </BootstrapTable> */}
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
      </div>
    );
  }
}
 
export default Table1;