import React from 'react';
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Column from '../layout/Column';
import ColumnForm from '../layout/ColumnForm';

import {getBoard, rearrangeBoardColumns} from '../../store/actions/board';
import {createColumn, getColumns} from '../../store/actions/column';
import {getTasks} from '../../store/actions/task';

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

class Board extends React.Component {
  componentWillMount() {
    this.props.getBoard(this.props.match.params.boardId, '_5181858');
  }

  componentWillUpdate(nextProps) {
    if (nextProps.board && nextProps.board.columnOrder.length !== 0 && nextProps.columns.length === 0) {
      console.log('ran')
      this.props.getColumns(nextProps.board._id);
      this.props.getTasks(nextProps.board._id);
    }


    if (this.props.board) {
      if (this.props.board.columnOrder.length !== nextProps.board.columnOrder.length) {
        console.log('gained new columns');
      }

      if (this.props.tasks.length !== nextProps.tasks.length) {
        console.log('added a new tasks');
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

    // const start = this.props.columns[source.droppableId];
    // const finish = this.props.columns[destination.droppableId];

    // console.log(start);
    // console.log(finish)

    // if (finish === start) {
    //   const newTaskIds = Array.from(start.taskIds);
    //   newTaskIds.splice(source.index, 1);
    //   newTaskIds.splice(destination.index, 0, draggableId);
  
    //   const newColumn = {
    //     ...start,
    //     taskIds: newTaskIds,
    //   };
  
    //   const newState = {
    //     ...this.state,
    //     columns: {
    //       ...this.state.columns,
    //       [newColumn.id]: newColumn,
    //     },
    //   };
  
    //   this.setState(newState);
    // } else {
    //   //  Moving from one list to another
    //   const startTaskIds = Array.from(start.taskIds);
    //   startTaskIds.splice(source.index, 1);
    //   const newStart = {
    //     ...start,
    //     taskIds: startTaskIds,
    //   };

    //   const finishTaskIds = Array.from(finish.taskIds);
    //   finishTaskIds.splice(destination.index, 0, draggableId);
    //   const newFinish = {
    //     ...finish,
    //     taskIds: finishTaskIds,
    //   };

    //   const newState = {
    //     ...this.state,
    //     columns: {
    //       ...this.state.columns,
    //       [newStart.id]: newStart,
    //       [newFinish.id]: newFinish,
    //     }
    //   };

    //   this.setState(newState);
    // }

  }

  displayContent = provided => {
    if (!this.props.board) return;

    return (
      <React.Fragment>
        {this.props.board.columnOrder.map((columnId, index) => {
          const column = this.props.columns.filter(column => column._id === columnId);
          if (column.length === 0) return;

          return (
            <Column 
              column={column[0]} 
              tasks={this.props.tasks} 
              taskOrder={column[0].taskOrder}
              key={column[0]._id}
              index={index} 
            />
          )
        })}
      {provided.placeholder}
      </React.Fragment>
    )
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-columns" direction='horizontal' type='column'>
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef} >
              <Navbar />
              {this.displayContent(provided)}
              <ColumnForm createColumn={this.props.createColumn} board={this.props.board} />
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
    tasks: state.task.tasks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBoard: (boardId, userId) => dispatch(getBoard(boardId, userId)),
    createColumn: (columnData, board) => dispatch(createColumn(columnData, board)),
    getColumns: boardId => dispatch(getColumns(boardId)),
    rearrangeBoardColumns: (board, columnOrder) => dispatch(rearrangeBoardColumns(board, columnOrder)),
    getTasks: boardId => dispatch(getTasks(boardId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);