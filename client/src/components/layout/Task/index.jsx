import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {Container, Icon, Title} from './styles';

class Task extends React.Component {  
  render() {
    return (
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >
            <Icon className='fas fa-edit' onClick={() => this.props.toggleModal(this.props.task)} />
            <Title>{this.props.task.name}</Title>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;