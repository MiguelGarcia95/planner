import React from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import {createTask, deleteTask, updateTask} from '../../../store/actions/task';

import Task from '../Task';
import TaskForm from '../TaskForm';
import TaskEditForm from '../TaskEditForm';

/* 
  Location: /boardID/boardName page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Create new tasks
*/ 

const Container = styled.section`
  width: 250px;
  min-width: 250px;
  ${props => `
    height: ${130 + props.tasks * 50}px;
  `}
  max-height: 100%;
  background: rgb(240,240,240);
  border-radius: 10px;
  margin: 50px 20px;
  margin-bottom: 0px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  h1 {
    font-size: 1em;
    line-height: 40px;
    margin: 0;
  }
  .title {
    font-size: 1.1em;
    line-height: 30px;
    font-weight: 500;
    padding-left: 10px;
  }
`;



const DroppableContainer = styled.section`
  ${props => props.isDraggingOver && `
    border: 1px solid rgba(10,10,10,0.1);
  `}
`;

class Column extends React.PureComponent {
  state = {
    modal: false,
    task: null,
    newTaskValue: '',
  }

  displayTasks = tasks => {
    return tasks.map((task, index) => {
      const taskData = this.props.tasks.filter(currentTask => currentTask._id === task);
      if (!taskData[0]) return;
      return (
        <Task 
          key={taskData[0]._id} 
          index={index} 
          task={taskData[0]} 
          toggleModal={this.toggleModal} 
          value={this.state.newTaskValue} 
        />
      )
    })
  }

  onTaskChange = e => this.setState({newTaskValue: e.target.value});

  onUpdateSubmit = e => {
    e.preventDefault();
    if (this.state.newTaskValue) {
      const updatedTask = {
        ...this.state.task,
        name: this.state.newTaskValue
      }
      this.props.updateTask(updatedTask);
      this.setState({modal: false})
    }
  }

  onTaskDelete = taskId => {
    this.props.deleteTask(taskId, this.props.column);
    this.setState({modal: false})
  }

  toggleModal = task => {
    this.setState({
      modal: !this.state.modal,
      task: this.state.modal ? null : task
    })
  };

  render() {
    return (
      <React.Fragment>
        <Draggable draggableId={this.props.column._id} index={this.props.index}>
          {(provided) => (
            <Container
              {...provided.draggableProps}
              ref={provided.innerRef}
              {...provided.dragHandleProps} 
              tasks={this.props.taskOrder.length}
            >
              <p className='title'>{this.props.column.name}</p>
              <Droppable droppableId={this.props.column._id} type='task' >
                {(provided, snapshot) => (
                  <DroppableContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {this.displayTasks(this.props.taskOrder)}
                    <TaskForm createTask={this.props.createTask} column={this.props.column} />
                    {provided.placeholder}
                  </DroppableContainer>
                )}
              </Droppable>

            </Container>
          )}
        </Draggable>
        <TaskEditForm 
          open={this.state.modal} 
          task={this.state.task} 
          toggleModal={this.toggleModal} 
          onSubmit={this.onUpdateSubmit} 
          onTaskChange={this.onTaskChange}
          onTaskDelete={this.onTaskDelete}
        />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (taskData, column) => dispatch(createTask(taskData, column)),
    deleteTask: (taskId, column) => dispatch(deleteTask(taskId, column)),
    updateTask: updatedTask => dispatch(updateTask(updatedTask)),
  }
}

export default connect(null, mapDispatchToProps)(Column);