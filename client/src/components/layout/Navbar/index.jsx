import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createBoard} from '../../../store/actions/board';

import SettingsModal from '../SettingsModal';
import BoardModal from '../BoardModal';

const Container = styled.section`
  height: 50px;
  display: flex;
  width: 100%;
  flex: 1;
  background: green;
  position: fixed;
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
    settingsModal: false,
    boardModal: false,
  }

  toggleBoardModal = () => this.setState({boardModal: !this.state.boardModal})
  toggleSettingsModal = () => this.setState({settingsModal: !this.state.settingsModal})
  onChange = e => this.setState({[e.target.name]: e.target.value});

  onBoardSubmit = e => {
    e.preventDefault();
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
            <section className='btn' onClick={this.toggleSettingsModal} >Settings</section>
            <section className='btn'>Logout</section>
            <section className='btn' onClick={this.toggleBoardModal} >+</section>
          </section>
        </Nav>

        <BoardModal 
          isOpen={this.state.boardModal} 
          toggle={this.toggleBoardModal}
          onFormChange={this.onChange}
          onSubmit={this.onBoardSubmit}
        />
        
        <SettingsModal 
          isOpen={this.state.settingsModal} 
          toggle={this.toggleSettingsModal} 
          onFormChange={this.onChange}
          onSubmit={this.onSettingsSubmit}
        />
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBoard: boardData => dispatch(createBoard(boardData))
  }
}

export default connect(null, mapDispatchToProps)(Navbar);