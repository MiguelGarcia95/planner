import React from 'react';
import {Container, Title, Form, Cancel, Button} from './styles';

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
    }
    this.props.createTask(task, this.props.column);
    this.resetState();
  }

  render() {
    return (
      <Container  open={!this.state.taskForm}>
        <Title onClick={this.taskFormToggle} open={!this.state.taskForm}>Add Task</Title>
        <Form open={this.state.taskForm}>
          <form onSubmit={this.onSubmit}>
            <textarea name='column_name' placeholder='task ...' onChange={this.setTaskName} value={this.state.taskName} />
            <Cancel onClick={() => this.taskFormToggle()}>Cancel</Cancel>
            <Button>Add</Button>
          </form>
        </Form>
      </Container>
    )
  }
}

export default TaskForm;