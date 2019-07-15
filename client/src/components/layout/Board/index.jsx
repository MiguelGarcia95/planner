import React from 'react';
import styled from 'styled-components';

/* 
  Location: home/index page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Click to Go to Board
*/ 

const Container = styled.section`
  flex-basis: 30%;
  height: 100px;
  background: ${props => props.bgColor ? props.bgColor : 'green'};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  text-align: center;
  h1 {
    line-height: 100px;
    font-size: 1.7em;
  }
`;


class Board extends React.Component {
  render() {
    return (
      <Container bgColor='#f0f0f0'>
        <h1>Board 1</h1>
      </Container>
    )
  }
}

export default Board;