import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectStudent } from './actions/studentAction';

//Material-ui components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class StudentList extends Component{
  render(){
    return(
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Student Id</strong></TableCell>
              <TableCell><strong>Names</strong></TableCell>
              <TableCell><strong>Program</strong></TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {
                this.props.list.map((student)=>{
                  return (
                    <TableRow key = { student.id }>
                    <TableCell> { student.id } </TableCell>
                    <TableCell onClick = {() => this.props.handleClick(student)}> { student.name }
                    </TableCell>
                    <TableCell> { student.program }</TableCell>
                    </TableRow>
                  )
                } )
              }
            </TableBody>
        </Table>

      <h1> Selected student is: <span> { this.props.selected.name } </span> </h1>
      </div>

    )
  }
}

function mapStateToProps(state)
{
  return({
    list: state.students,
    selected: state.selected 
  }) 
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({
    handleClick: selectStudent
  },dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) (StudentList);
