import React from 'react';
import {Container, Icon} from './styles';
import {Link} from 'react-router-dom';
import BoardEditModal from '../BoardEditModal';

class Board extends React.Component {
  state = {
    modal: false,
    newBoardName: this.props.board.name,
    board_color: this.props.board.bgColor,
    text_color: this.props.board.textColor,
    error: ''
  }

  toggleModal = () => this.setState({modal: !this.state.modal,  error: ''});
  onBoardChange = e => this.setState({newBoardName: e.target.value, error: ''});
  onColorPick = (color, type) => this.setState({[type]: color});

  onBoardDelete = () => {
    this.props.deleteBoard(this.props.board._id);
    this.setState({modal: false})
  }

  onBoardUpdate = e => {
    e.preventDefault();
    if (this.state.newBoardName && (this.state.newBoardName !== this.props.board.name || this.state.board_color !== this.props.board.bgColor)) {
      const updatedBoard = {
        ...this.props.board,
        name: this.state.newBoardName,
        bgColor: this.state.board_color,
        textColor: this.state.text_color
      }
      this.props.updateBoard(updatedBoard);
      this.setState({modal: false})
    } else if (this.state.newBoardName && (this.state.newBoardName === this.props.board.name || this.state.board_color === this.props.board.bgColor)) {
      this.setState({error: 'Update either board name or color.'});
    } else {
      this.setState({error: 'Board name can\'t be empty.'});
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
          board={this.props.board}  
          toggleModal={this.toggleModal}
          onBoardChange={this.onBoardChange}
          onBoardDelete={this.onBoardDelete}
          onSubmit={this.onBoardUpdate}
          onColorChange={this.onColorPick}
          state={this.state}
        />
      </React.Fragment>
    )
  }
}

export default Board;