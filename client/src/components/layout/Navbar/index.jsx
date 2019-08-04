import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createBoard} from '../../../store/actions/board';
import {signinWithToken, logout} from '../../../store/actions/auth';

import {Container, Logo, Nav} from './styles';
import BoardModal from '../BoardModal';
import {getCookie} from '../../../utils/cookies';

class Navbar extends React.Component {
  state = {
    boardModal: false,
    board_name: '',
    board_color: '#ffffff',
    text_color: '#000000',
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

  onChange = e => this.setState({[e.target.name]: e.target.value});
  
  onColorPick = (color, type) => this.setState({[type]: color});

  onBoardSubmit = e => {
    e.preventDefault();
    const board = {
      name: this.state.board_name,
      bgColor: this.state.board_color,
      userId: this.props.user._id,
      textColor: this.state.text_color,
    }

    this.props.createBoard(board);
    this.setState({boardModal: false, board_name: '', board_color: ''});
  };

  render() {
    return (
      <Container>
        <Logo><section className="logo">P</section></Logo>
        <Nav>
          <section className="nav">
            <Link className='link' to='/'>Boards</Link>
            <section className='btn' onClick={() => this.props.logout()} >Logout</section>
            <section className='btn' onClick={this.toggleBoardModal} >+</section>
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