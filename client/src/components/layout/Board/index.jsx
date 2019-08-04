import React from 'react';
import {Container, Icon} from './styles';
import {Link} from 'react-router-dom';
import BoardEditModal from '../BoardEditModal';

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
    if (this.state.newBoardName) {
      const updatedBoard = {
        ...this.props.board,
        name: this.state.newBoardName
      }
      this.props.updateBoard(updatedBoard);
      this.setState({modal: false})
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container bgColor={this.props.board.bgColor} textColor={this.props.board.textColor} >
          <Icon className="fas fa-ellipsis-h settings" onClick={this.toggleModal} textColor={this.props.board.textColor} />
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