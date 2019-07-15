import React from 'react';
import styled from 'styled-components';

/* 
  Location: home/index page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Click to Go to Board
*/ 

const Container = styled.section`
  width: 250px;
  height: 100px;
  background-color: ${props => (props.bgColor ? props.bgColor : 'white')};
`;

class Board extends React.Component {
  render() {
    return (
      <section className="app">

      </section>
    )
  }
}

export default Board;