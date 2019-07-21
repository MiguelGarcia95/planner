import React from 'react';
import styled from 'styled-components';

const Container = styled.section``;
const Form = styled.section``;

class TaskForm extends React.Component {
  state = {
    taskForm: false,
    taskName: ''
  }

  taskFormToggle = () => this.setState({columnForm: !this.state.taskForm});
  setTaskName = e => this.setState({taskName: e.target.value});
  resetState = () => this.setState({columnForm: false, taskName: ''});

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
      <Container  open={this.state.taskForm}>
        <Form open={this.state.taskForm}>
          <form onSubmit={this.onSubmit}>
            <input name='column_name' onChange={this.setTaskName} value={this.state.taskName} />
            <p onClick={() => this.taskFormToggle()}>Cancel</p>
            <button>Add</button>
          </form>
        </Form>
      </Container>
    )
  }
}

export default TaskForm;