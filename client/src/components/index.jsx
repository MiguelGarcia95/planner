import React from 'react';
import styled from 'styled-components';
// import Board from './layout/Board';

/* 
  Location: Index/home page
  Purpose: Show current boards
  Access: Need to be Authenticated *Ignore for now*
  Features: Create new boards,
  From Here: Board link, signout/signin page, settings 
*/ 

const Page = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? props.bgColor : '#f9f9f9')};
`;

const Container = styled.section`
  width: 800px; 
  min-height: 100vh;
  // background: red;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Board = styled.section`
  flex: 1;
  background: green;
`;

class App extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <Board>
            <h1>Board 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Board>
          <Board>
            <h1>Board 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Board>
          <Board>
            <h1>Board 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Board>
          
        </Container>
      </Page>
    )
  }
}

export default App;