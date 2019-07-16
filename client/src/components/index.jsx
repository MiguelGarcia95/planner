import React from 'react';
import styled from 'styled-components';
import Board from './layout/Board';
import Navbar from './layout/Navbar';

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
  width: 70%;
  min-height: 100vh;
  margin: auto;
`;

const Boards = styled.section`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
`;


class App extends React.Component {
  render() {
    return (
      <Page>
        <Navbar />
        <Container>
          <Boards>
            <Board board={{title: 'board', bgColor: '#f0f0f0'}} />
          </Boards>
        </Container>
      </Page>
    )
  }
}

export default App;