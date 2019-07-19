import React from 'react';
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Column from '../layout/Column';
import ColumnForm from '../layout/ColumnForm';

import {getBoard} from '../../store/actions/board';
import {createColumn} from '../../store/actions/column';

/* 
  Location: /boardID/boardName page
  Purpose: Show Columns and Tasks
  Access: Need to be Authenticated & creator of board *Ignore for now*
  Features: Create new columns, re order them,
*/ 
  
const Container = styled.section`
  background-color: ${props => (props.bgColor ? props.bgColor : '#f9f9f9')};
  min-width: 100vw;
  display: flex;
  height: 100vh;
  margin: auto;
`;

class InnerList extends React.PureComponent {
  render() {
    const {column, taskMap, index} = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />
  }
}

class Board extends React.Component {
  state = {
    // state.task.tasks
    // getTasks(columnId)
    tasks: {
      'task-1': {id: 'task-1', content: 'Take out the trash'},
      'task-2': {id: 'task-2', content: 'Watch the new episode'},
      'task-3': {id: 'task-3', content: 'Shitpost'},
      'task-4': {id: 'task-4', content: 'Snipe noobs on csgo'},
    },
    // state.column.columns
    // getColumns(boardId)
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In progress',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: [],
      },
    },
    // state.column.columnOrder
    // getColumnOrder(boardId);
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };

  componentWillMount() {
    this.props.getBoard(this.props.match.params.boardId, '_5181858');
  }

  columnFormToggle = () => this.setState({columnForm: !this.state.columnForm});

  onDragEnd = result => {
    const {destination, source, draggableId, type} = result;
    // End function if no destination
    if (!destination) return;
    // End function if destination is the same as origin
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      // Remove source column from column list
      newColumnOrder.splice(source.index, 1);
      // Add column into proper column list order
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      }

      this.setState(newState);
      // console.log(result)
      return;
    }

    // const start = this.state.columns[source.droppableId];
    // const finish = this.state.columns[destination.droppableId];
  }

  taskCreator = () => {
    return (
      <ColumnForm  />
    )
  }

  displayContent = provided => {
    return (
      <Container {...provided.droppableProps} ref={provided.innerRef} >
        <Navbar />
        {this.taskCreator()}
        {/* {this.state.columnOrder.map((columnId, index) => {
          const column = this.state.columns[columnId];
          return (
            <InnerList 
              key={column.id} 
              index={index} 
              column={column} 
              taskMap={this.state.tasks} 
              
            />
          );
        })} */}
        {/* {provided.placeholder} */}
      </Container>
    )
  }

  render() {
    // console.log(this.props.board)
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-columns" direction='horizontal' type='column'>
          {provided => this.displayContent(provided)}
        </Droppable>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.currentBoard,
    columns: state.column.columns,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBoard: (boardId, userId) => dispatch(getBoard(boardId, userId)),
    createColumn: columnData => dispatch(createColumn(columnData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);