import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createBoard} from '../../../store/actions/board';
import {signinWithToken, logout} from '../../../store/actions/auth';

import {Container, Logo, Nav, NavItem} from './styles';
import BoardModal from '../BoardModal';
import {getCookie} from '../../../utils/cookies';

class Navbar extends React.Component {
  state = {
    boardModal: false,
    board_name: '',
    board_color: '#ffffff',
    text_color: '#000000',
    error: '',
  }

  componentDidMount() {
    if (getCookie('token') !== '' && !this.props.user) {
      this.props.signinWithToken();
    } else if (getCookie('token') === '') {
      this.props.history.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.token) {
      this.props.history.push('/login');
    }
  }

  toggleBoardModal = () => this.setState({boardModal: !this.state.boardModal});
  onChange = e => this.setState({[e.target.name]: e.target.value, error: ''});
  onColorPick = (color, type) => this.setState({[type]: color});

  onBoardSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.board_color && this.state.text_color) {
      const board = {
        name: this.state.board_name,
        bgColor: this.state.board_color,
        userId: this.props.user._id,
        textColor: this.state.text_color,
      }
      this.props.createBoard(board);
      this.setState({boardModal: false, board_name: '', board_color: '#ffffff', text_color: '#000000',});
    } else if (this.state.name && this.state.board_color) {
      this.setState({error: ''})
    } else if (this.state.name && this.state.text_color) {
      this.setState({error: ''})
    } else if (this.state.board_color && this.state.text_color) {
      this.setState({error: ''})
    } else {
      this.setState({error: ''})
    }
  };

  render() {
    return (
      <Container>
        <Logo><section className="logo">P</section></Logo>
        <Nav>
          <section className="nav">
            <Link className='link' to='/'>Home</Link>
            <NavItem onClick={() => this.props.logout()} >Logout</NavItem>
            <NavItem className="fas fa-plus" onClick={this.toggleBoardModal} />
          </section>
        </Nav>

        <BoardModal 
          toggle={this.toggleBoardModal}
          onFormChange={this.onChange}
          onSubmit={this.onBoardSubmit}
          state={this.state}
          onColorChange={this.onColorPick}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBoard: boardData => dispatch(createBoard(boardData)),
    signinWithToken: () => dispatch(signinWithToken()),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);