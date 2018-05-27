import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectStudent } from './actions/studentAction';

class StudentList extends Component{
  render(){
    return(
      <div>
      <table>
      <thead>
        <tr>
          <th> ID </th> 
          <th> Names </th>
        </tr>
          </thead>
          <tbody>
          {
            this.props.list.map((student) => {
              return (
                <tr key={student.id}> <td> {student.id} </td>
                <td onClick = {() => this.props.handleClick(student)}>{student.name} </td>
                </tr>
                
              )
            })
          }
          </tbody>
      </table>
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
