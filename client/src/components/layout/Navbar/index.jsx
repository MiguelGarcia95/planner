import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 50px;
  display: flex;
  width: 100%;
  flex: 1;
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
    background: green;
  }
`;

const Nav = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  .nav {
    height: 50px;
    width: 250px;
    background: green;
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Logo>
          <section className="logo">L</section>
        </Logo>
        <Nav>
          <section className="nav">
            
          </section>
        </Nav>
      </Container>
    )
  }
}

export default Navbar;