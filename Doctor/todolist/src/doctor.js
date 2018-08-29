import React from "react-dom";
import "./index.css";
import ReactDOM from "react-dom";
var TableComponent = React.createClass({
    render: function() 
    {
      // Data
      var dataColumns = this.props.data.columns;
      var dataRows = this.props.data.rows;
  
      var tableHeaders = (<thead>
            <tr>
              {dataColumns.map(function(column) {
                return <th>{column}</th>; })}
            </tr>
        </thead>);
  
      var tableBody = dataRows.map(function(row) {
        return (
          <tr>
            {dataColumns.map(function(column) {
              return <td>{row[column]}</td>; })}
          </tr>); });
       
      // Decorate with Bootstrap CSS
      return (<table className="table table-bordered table-hover" width="100%">
          {tableHeaders}
          {tableBody}
        </table>) 
        
        }});
          
  
        // Example Data
            var tableData = 
            {
            columns: ['Sr.No', 'Patient', 'Date', 'Time',""],
            rows: [
                {
                    'Sr.No': 1,
                    'Patient': "Patient1",
                    'Date': '10/01/2019',
                    'Time': "12:00",
                }, 
                {
                    'Sr.No': 2,
                    'Patient': "Patient2",
                    'Date': '10/01/2019',
                    'Time': "12:00",
                }, 
                {
                    'Sr.No': 3,
                    'Patient': "Patient3",
                    'Date': '10/01/2019',
                    'Time': "12:00",
                }, 
                {
                    'Sr.No': 4,
                    'Patient': "Patient4",
                    'Date': '10/01/2019',
                    'Time': "12:00",
                }, 
                {
                    'Sr.No': 5,
                    'Patient': "Patient5",
                    'Date': '10/01/2019',
                    'Time': "12:00",
                }
                ]
            };
  ReactDOM.render(
    <TableComponent data = {tableData} />,
    document.getElementById('container'));