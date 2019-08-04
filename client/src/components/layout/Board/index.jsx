import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BoardEditModal from '../BoardEditModal';

/* 
  Location: home/index page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Click to Go to Board
*/ 

const Container = styled.section`
  flex-basis: 30%;
  height: 100px;
  background: ${props => props.bgColor ? props.bgColor : 'rgba(0,0,0,0.5)'};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  text-align: center;
  margin-top: 50px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5px;
  position: relative;
  z-index: 1;
  i {
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 5px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    h1 {
      line-height: 100px;
      font-size: 1.7em;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
      color: ${props => props.textColor ? props.textColor : 'white'};
    }
  }

  @media(max-width: 900px) {flex-basis: 45%;}
  @media(max-width: 600px) {flex-basis: 100%;}
`;


class Board extends React.Component {
  state = {
    modal: false,
    newBoardName: ''
  }

  toggleModal = () => this.setState({modal: !this.state.modal});

  onBoardChange = e => this.setState({newBoardName: e.target.value});

  onBoardDelete = () => {
    this.props.deleteBoard(this.props.board._id);
    this.setState({modal: false})
  }

  onBoardUpdate = e => {
    e.preventDefault();
    if (this.state.newColumnValue) {
      const updatedColumn = {
        ...this.props.column,
        name: this.state.newColumnValue
      }
      this.props.updateColumn(updatedColumn);
      this.setState({modal: false})
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container bgColor={this.props.board.bgColor} textColor={this.props.board.textColor} >
          <i className="fas fa-ellipsis-h settings" onClick={this.toggleModal}></i>
          <Link to={`/${this.props.board._id}/${this.props.board.name}`}>
            <h1>{this.props.board.name}</h1>
          </Link>
        </Container>
        <BoardEditModal 
          open={this.state.modal} 
          board={this.props.board}  
          toggleModal={this.toggleModal}
          onBoardChange={this.onBoardChange}
          onBoardDelete={this.onBoardDelete}
          onSubmit={this.onBoardUpdate}
        />
      </React.Fragment>
    )
  }
}

export default Board;