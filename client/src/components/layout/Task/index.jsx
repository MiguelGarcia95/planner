import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

/* 
  Location: /boardID/boardName page
  Purpose: Show Task
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Delete tasks
*/ 

const Container = styled.section`
  min-height: 40px;
  background: green;
  background: rgba(250,250,250,1);
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  line-height: 20px;
  font-size: 1em;
  word-wrap: break-word;
  margin: 10px 0px;
  position: relative;
`;

const Icon = styled.i`
  width: 20px; 
  height: 20px;
  text-aling: center;
  position: absolute;
  right: -5px;
  top: 0px;
  cursor: pointer;
`;

const Modal = styled.section`
  width: 200px;
  height: 0px;
  background: red;
  position: absolute;
  ${props => props.open && `
    height: 120px;
  `}
`;

class Task extends React.Component {
  state = {
    modal: false,
  }
  
  toggleModal = () => this.setState({modal: !this.state.modal});
  
  render() {
    return (
      <React.Fragment>
        <Draggable draggableId={this.props.task._id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}
            >
              <Icon className='fas fa-edit' onClick={this.toggleModal} />
              {this.props.task.name}
            </Container>
          )}
        </Draggable>
        <Modal open={this.state.modal} />
      </React.Fragment>
    )
  }
}

export default Task;