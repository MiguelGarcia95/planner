import React from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import {createTask} from '../../../store/actions/task';

import Task from '../Task';
import TaskForm from '../TaskForm';

/* 
  Location: /boardID/boardName page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Create new tasks
*/ 

const Container = styled.section`
  width: 250px;
  ${props => `
    height: ${100 + props.tasks * 80}px;
  `}
  // For Column
  // flex: 0 0 auto;
  background: rgba(240,240,240,1);
  border-radius: 10px;
  margin: 50px 20px;

  padding: 10px;
  box-sizing: border-box;
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
  .task {
    min-height: 40px;
    background: green;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    line-height: 20px;
    font-size: 1em;
    word-wrap: break-word;
    margin: 10px 0px;
  }
`;

const DroppableContainer = styled.section`
  ${props => props.isDraggingOver && `
    background: red
  `}
`;

class Column extends React.PureComponent {
  displayTasks = tasks => {
    return tasks.map((task, index) => {
      const taskData = this.props.tasks.filter(currentTask => currentTask._id === task);
      if (!taskData[0]) return;
      return <Task key={taskData[0]._id} index={index} task={taskData[0]} />
    })
  }

  render() {
    return (
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
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (taskData, column) => dispatch(createTask(taskData, column)),
  }
}

export default connect(null, mapDispatchToProps)(Column);