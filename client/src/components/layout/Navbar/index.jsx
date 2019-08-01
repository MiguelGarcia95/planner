import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createBoard} from '../../../store/actions/board';
import {signinWithToken, logout} from '../../../store/actions/auth';

import BoardModal from '../BoardModal';
import {getCookie} from '../../../utils/cookies';

const Container = styled.section`
  height: 50px;
  display: flex;
  width: 100%;
  flex: 1;
  z-index: 5;
  position: fixed;
  background: #11998e;  
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
`;

const Logo = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  .logo {
    line-height: 50px;
    height: 50px;
    width: 50px;
    text-align: center;
    font-size: 2em;
  }
`;

const Nav = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  .nav {
    height: 50px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .link, .btn {
      flex-basis: 20%;
      text-align: center;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }
`;

class Navbar extends React.Component {
  state = {
    boardModal: false,
    board_name: '',
    board_color: ''
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

  toggleBoardModal = () => this.setState({boardModal: !this.state.boardModal})
  onChange = e => this.setState({[e.target.name]: e.target.value});

  onBoardSubmit = e => {
    e.preventDefault();
    const board = {
      name: this.state.board_name,
      bgColor: this.state.board_color,
      userId: this.props.user._id,
    }

    this.props.createBoard(board);
    this.setState({boardModal: false, board_name: '', board_color: ''});
  };

  onSettingsSubmit = e => {
    e.preventDefault();
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
          isOpen={this.state.boardModal} 
          toggle={this.toggleBoardModal}
          onFormChange={this.onChange}
          onSubmit={this.onBoardSubmit}
          name={this.state.board_name}
          color={this.state.board_color}
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