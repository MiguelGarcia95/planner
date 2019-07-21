import React from 'react';
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Column from '../layout/Column';
import ColumnForm from '../layout/ColumnForm';

import {getBoard, rearrangeBoardColumns} from '../../store/actions/board';
import {createColumn, getColumns} from '../../store/actions/column';

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
  overflow: auto;
  flex-wrap: nowrap
  -webkit-overflow-scrolling: touch; /* [4] */
  -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */ }
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
    tasks: {
      'task-1': {id: 'task-1', content: 'Take out the trash'},
      'task-2': {id: 'task-2', content: 'Watch the new episode'},
      'task-3': {id: 'task-3', content: 'Shitpost'},
      'task-4': {id: 'task-4', content: 'Snipe noobs on csgo'},
    },
  };

  componentWillMount() {
    this.props.getBoard(this.props.match.params.boardId, '_5181858');
  }

  componentWillUpdate(nextProps) {
    if (nextProps.board && nextProps.board.columns.length !== 0 && nextProps.columns.length === 0) {
      console.log('ran')
      this.props.getColumns(nextProps.board._id);
    }


    if (this.props.board) {
      if (this.props.board.columns.length !== nextProps.board.columns.length) {
        console.log('gained new columns');
      }
    }

  }

  onDragEnd = result => {
    const {destination, source, draggableId, type} = result;
    // End function if no destination
    if (!destination) return;
    // End function if destination is the same as origin
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'column') {
      const newColumnOrder = Array.from(this.props.board.columnOrder);
      // Remove source column from column list
      newColumnOrder.splice(source.index, 1);
      // Add column into proper column list order
      newColumnOrder.splice(destination.index, 0, draggableId);

      this.props.rearrangeBoardColumns(this.props.board, newColumnOrder);

      return;
    }

    // const start = this.state.columns[source.droppableId];
    // const finish = this.state.columns[destination.droppableId];
  }

  taskCreator = () => {
    return (
      <React.Fragment>
        <ColumnForm createColumn={this.props.createColumn} board={this.props.board} />
      </React.Fragment>
    )
  }

  displayContent = provided => {
    if (!this.props.board) return;

    return (
      <React.Fragment>
        {this.props.board.columnOrder.map((columnId, index) => {
          const column = this.props.board.columns.filter(column => column.id === columnId);
          return (
            <Column 
              column={column[0]} 
              tasks={[]} 
              key={column[0].id}
              index={index} 
            />
          )
          // return (
          //   <InnerList 
          //     key={column.id} 
          //     index={index} 
          //     column={column} 
          //     taskMap={this.state.tasks} 
          //   />
          // );
        })}
      {provided.placeholder}
      </React.Fragment>
    )
  }

  render() {
    // console.log(this.props.board)
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-columns" direction='horizontal' type='column'>
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef} >
              <Navbar />
              {this.displayContent(provided)}
              {this.taskCreator()}
            </Container>
          )}
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
    createColumn: (columnData, board) => dispatch(createColumn(columnData, board)),
    getColumns: boardId => dispatch(getColumns(boardId)),
    rearrangeBoardColumns: (board, columnOrder) => dispatch(rearrangeBoardColumns(board, columnOrder))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);