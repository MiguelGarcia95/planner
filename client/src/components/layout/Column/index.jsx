import React from 'react';
import styled from 'styled-components';
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
      <Container>
        {this.props.tasks.map(task => {
          return (
            <h1 key={task.id} >{task.content}</h1>
          )
        })}
      </Container>
    )
  }
}

export default Column;