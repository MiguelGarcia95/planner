import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';
import {connect} from 'react-redux';
import {getBoard} from '../../store/actions/board';

/* 
  Location: /boardID/boardName page
  Purpose: Show Columns and Tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Create new columns, re order them,
*/ 
  
  const Container = styled.section`
  background-color: ${props => (props.bgColor ? props.bgColor : '#f9f9f9')};
  min-width: 100vw;
  height: 100vh;
  margin: auto;
`;

class Board extends React.Component {
  componentDidMount() {
    const {boardId} = this.props.match.params;
    this.props.getBoard(boardId)
  }

  render() {
    console.log(this.props.board)
    return (
      <Container>
        <Navbar />

      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.currentBoard,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBoard: boardId => dispatch(getBoard(boardId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);