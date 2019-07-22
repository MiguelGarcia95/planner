import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  flex-basis: 50%;
  min-width: 300px;
  min-height: 150px;
  height: 150px;
  align-self: center;
  margin: auto;
  padding: 25px;
  box-sizing: border-box;
  text-align: center;
  h2 {
    font-weight: 400;
    font-size: 1.4em;
  }
  a {
    font-weight: bold;
    font-size: 1em;
    line-height: 50px;
    color: black;
  }

  @media (max-width: 350px) {
    min-width: initial;
    // padding: 0px;
    flex-basis: 100%;

  }
`;

function Redirect() {
  return (
    <Container>
      <h2>You don't have permission to view this board.</h2>
      <Link to='/' >Return Home</Link>
    </Container>
  )
}

export default Redirect;