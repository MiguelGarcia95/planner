import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getBoards} from '../store/actions/board';
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
  componentDidMount() {
    // this.props.getUser();
    console.log(this.props.user);
    this.props.getBoards('_5181858');
  }

  displayBoards = () => {
    return this.props.boards.map(board => <Board key={board._id} board={board} />)
  }

  render() {
    return (
      <Page>
        <Navbar />
        <Container>
          <Boards>
            {this.displayBoards()}
          </Boards>
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoards: userId => dispatch(getBoards(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);