import React from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';

/* 
  Location: /boardID/boardName page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Create new tasks
*/ 

const Container = styled.section`
  width: 250px;
  height: 200px;
  margin: 0 20px;
  background: red;
  margin-top:50px;
  h1 {
    font-size: 1em;
    line-height: 40px;
    margin: 0;
  }
`;

class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps} 
          >
            {this.props.tasks.map(task => {
              return (
                <h1 key={task.id}  >{task.content}</h1>
              )
            })}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Column;