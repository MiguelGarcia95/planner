import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

/* 
  Location: home/index page
  Purpose: Show tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Click to Go to Board
*/ 

const Container = styled.section`
  flex-basis: 30%;
  height: 100px;
  background: ${props => props.bgColor ? props.bgColor : 'rgba(0,0,0,0.5)'};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  text-align: center;
  margin-top: 50px;
  overflow: hidden;
  a {
    text-decoration: none;
    h1 {
      line-height: 100px;
      font-size: 1.7em;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: white;
    }
  }

  @media(max-width: 900px) {flex-basis: 45%;}
  @media(max-width: 600px) {flex-basis: 100%;}
`;


class Board extends React.Component {
  render() {
    return (
      <Container bgColor={this.props.board.bgColor}>
        <Link to={`/${this.props.board.id}/${this.props.board.title}`}>
          <h1>{this.props.board.title}</h1>
        </Link>
      </Container>
    )
  }
}

export default Board;