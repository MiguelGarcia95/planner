import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Text} from './styles';

function Redirect() {
  return (
    <Container>
      <Text>You don't have permission to view this board.</Text>
      <Link to='/' >Return Home</Link>
    </Container>
  )
}

export default Redirect;