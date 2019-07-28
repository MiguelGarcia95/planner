import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 40px;
  overflow: hidden;
  ${props => !props.open && `
    height: 80px;
  `}
  h3 {
    height: 0px;
    cursor: pointer;
    overflow: hidden;
    line-height: 40px;
    font-size: 1em;
    margin-left: 20px;
    ${props => props.open && `
      height: 40px;
    `}
  }
`;

const Form = styled.section`
  width: 100%; 
  height: 100%;

  textarea {
    width: 100%; 
    padding: 2px;
    border: none;
    resize: none;
    box-sizing: border-box;
    height: 40px;
  }
  p, button {
    width: 100px;
    line-height: 25px;
    height: 25px;
    cursor: pointer;
    color: white;
  }
  p {
    background: rgb(213,78,78);
    text-align: center;
    margin: 0;
    float: left;
  }
  button {
    background: rgb(100,180,100);
    float: right;
    border: none;
    padding: 0;
  }
`;

class TaskForm extends React.Component {
  state = {
    taskForm: false,
    taskName: ''
  }

  taskFormToggle = () => this.setState({taskForm: !this.state.taskForm});
  setTaskName = e => this.setState({taskName: e.target.value});
  resetState = () => this.setState({taskForm: false, taskName: ''});

  onSubmit = e => {
    e.preventDefault();

    const task = {
      name: this.state.taskName,
      columnId: this.props.column._id,
      boardId: this.props.column.boardId,
      taskOrder: []
    }

    this.props.createTask(task, this.props.column);
    this.resetState();
  }

  render() {
    return (
      <Container  open={!this.state.taskForm}>
        <h3 onClick={this.taskFormToggle} >Add Task</h3>
        <Form open={this.state.taskForm}>
          <form onSubmit={this.onSubmit}>
            <textarea name='column_name' placeholder='task ...' onChange={this.setTaskName} value={this.state.taskName} />
            <p onClick={() => this.taskFormToggle()}>Cancel</p>
            <button>Add</button>
          </form>
        </Form>
      </Container>
    )
  }
}

export default TaskForm;