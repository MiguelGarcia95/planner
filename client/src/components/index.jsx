import React from 'react';
import styled from 'styled-components';
import {Page, Container, Boards} from './styles';
import {connect} from 'react-redux';
import {getBoards, deleteBoard, updateBoard} from '../store/actions/board';
import Board from './layout/Board';
import Navbar from './layout/Navbar';

/* 
  Location: Index/home page
  Purpose: Show current boards
  Access: Need to be Authenticated *Ignore for now*
  Features: Create new boards,
  From Here: Board link, signout/signin page, settings 
*/ 

class App extends React.Component {
  state = {
    toggle: false,
  }
  componentDidMount() {
    if (this.props.user && !this.props.started) 
      this.props.getBoards(this.props.user._id);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.user && nextProps.user) 
      this.props.getBoards(nextProps.user._id);

    if (this.props.boardToggle !== nextProps.boardToggle) 
      this.setState({toggle: !this.state.toggle})
  }

  displayBoards = () => {
    if (!this.props.boards) return '';
    return this.props.boards.map(board => <Board key={board._id} board={board} deleteBoard={this.props.deleteBoard} updateBoard={this.props.updateBoard} />)
  }

  render() {
    return (
      <Page>
        <Navbar history={this.props.history} />
        <Container>
          <Boards>{this.displayBoards()}</Boards>
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    user: state.auth.user,
    started: state.board.started,
    boardToggle: state.board.boardToggle
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoards: userId => dispatch(getBoards(userId)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    updateBoard: updatedBoard => dispatch(updateBoard(updatedBoard)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);