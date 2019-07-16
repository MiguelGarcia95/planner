import React from 'react';
import styled from 'styled-components';

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
    a {
      width: 100px;
      text-align: center;
      text-decoration: none;
      color: inherit;
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Logo>
          <section className="logo">P</section>
        </Logo>
        <Nav>
          <section className="nav">
            <a>Boards</a>
            <a>Settings</a>
            <a>Logout</a>
          </section>
        </Nav>
      </Container>
    )
  }
}

export default Navbar;