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
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  line-height: 20px;
  font-size: 1em;
  word-wrap: break-word;
  margin: 10px 0px;
`;

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={1} index={1} >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >
            {/* {this.props.task.content} */}
            'TASK'
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;