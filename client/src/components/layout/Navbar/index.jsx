import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 50px;
  background: red;
  display: flex;
  flex: 1;
`;

const Logo = styled.section`
`;

const Nav = styled.section`
`;

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Logo></Logo>
        <Nav></Nav>
      </Container>
    )
  }
}

export default Navbar;