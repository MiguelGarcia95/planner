import React from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import {createTask, deleteTask, updateTask} from '../../../store/actions/task';
import {deleteColumn, updateColumn} from '../../../store/actions/column';

import Task from '../Task';
import TaskForm from '../TaskForm';
import EditForm from '../EditForm';
import {Container, Title, Icon, DroppableContainer} from './styles';

class Column extends React.PureComponent {
  state = {
    modal: false,
    task: null,
    columnModal: false,
  }

  displayTasks = tasks => {
    return tasks.map((task, index) => {
      const taskData = this.props.tasks.filter(currentTask => currentTask._id === task);
      if (!taskData[0]) return '';
      return (
        <Task 
          key={taskData[0]._id} 
          index={index} 
          task={taskData[0]} 
          toggleModal={this.toggleTaskModal} 
          value={this.state.newTaskValue} 
        />
      )
    })
  }

  resetState = () => {
    this.setState({
      modal: false,
      task: null,
      columnModal: false,
    })
  }

  // onTaskDelete = taskId => {
  //   this.props.deleteTask(taskId, this.props.column);
  //   this.setState({modal: false})
  // }

  // onColumnDelete = () => {
  //   this.props.deleteColumn(this.props.column._id, this.props.board);
  //   this.setState({columnModal: false})
  // }

  toggleTaskModal = task => {
    this.setState({
      modal: !this.state.modal,
      task: this.state.modal ? null : task,
    })
  };

  toggleColumnModal = () => this.setState({columnModal: !this.state.columnModal})

  render() {
    return (
      <React.Fragment>
        <Draggable draggableId={this.props.column._id} index={this.props.index}>
          {(provided) => (
            <Container {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
              <Title>{this.props.column.name}</Title>
              <Icon className="fas fa-ellipsis-h" onClick={this.toggleColumnModal}/>
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

        {this.state.task && (
          <EditForm 
            open={this.state.modal} 
            data={this.state.task} 
            type='Task'
            toggleModal={this.toggleTaskModal} 
            onSubmit={this.props.updateTask} 
            onDelete={this.props.deleteTask}
            resetState={this.resetState}
          />
        )}
        
        {this.props.column && (
          <EditForm 
            open={this.state.columnModal}
            data={this.props.column} 
            type='Column'
            toggleModal={this.toggleColumnModal} 
            onSubmit={this.props.updateColumn} 
            onDelete={this.props.deleteColumn}
            resetState={this.resetState}
          />
        )}
        
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (taskData, column) => dispatch(createTask(taskData, column)),
    deleteTask: (taskId, column) => dispatch(deleteTask(taskId, column)),
    deleteColumn: (columnId, board) => dispatch(deleteColumn(columnId, board)),
    updateTask: updatedTask => dispatch(updateTask(updatedTask)),
    updateColumn: updatedColumn => dispatch(updateColumn(updatedColumn))
  }
}

export default connect(null, mapDispatchToProps)(Column);