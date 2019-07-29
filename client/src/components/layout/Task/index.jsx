import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

/* 
  Location: /boardID/boardName page
  Purpose: Show Task
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Delete tasks
*/ 

const Container = styled.section`
  min-height: 40px;
  background: green;
  background: rgba(250,250,250,1);
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  line-height: 20px;
  font-size: 1em;
  word-wrap: break-word;
  margin: 10px 0px;
  position: relative;
`;

const Icon = styled.i`
  width: 20px; 
  height: 20px;
  text-aling: center;
  position: absolute;
  right: -5px;
  top: 0px;
  cursor: pointer;
`;

class Task extends React.Component {  
  render() {
    return (
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >
            <Icon className='fas fa-edit' onClick={() => this.props.toggleModal(this.props.task)} />
            {this.props.task.name}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;