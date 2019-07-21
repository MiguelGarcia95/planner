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
  // For Column
  flex: 0 0 auto;
  margin: 0 20px;
  background: rgba(240,240,240,1);
  border-radius: 10px;
  margin-top:50px;
  padding: 10px;
  border-sizing: border-box;
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
            <p className='title'>{this.props.column.name}</p>
            {/* {this.props.tasks.map(task => {
              return (
                <h1 key={task.id}  >{task.content}</h1>
              )
            })} */}
            <section className='task'>
              Lorem Lorem Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            </section>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Column;