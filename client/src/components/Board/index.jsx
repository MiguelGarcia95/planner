import React from 'react';
import styled from 'styled-components';
import {Container} from '../_StyledComponents/Board';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Redirect from '../layout/Redirect';
import BoardContent from '../layout/BoardContent';

import {getBoard, rearrangeBoardColumns} from '../../store/actions/board';
import {createColumn, getColumns, rearrangeColumnTasks} from '../../store/actions/column';
import {getTasks} from '../../store/actions/task';

class Board extends React.Component {
  state = {}

  componentDidMount() {
    if (this.props.user) {
      this.props.getBoard(this.props.match.params.boardId, this.props.user._id);
    }

    if (this.props.board && this.props.board.columnOrder.length !== 0 && this.props.columns.length === 0) {
      this.props.getColumns(this.props.board._id);
      this.props.getTasks(this.props.board._id);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.user && !this.props.user) {
      this.props.getBoard(this.props.match.params.boardId, nextProps.user._id);
    }

    if (nextProps.board && nextProps.board.columnOrder.length !== 0 && nextProps.columns.length === 0 && nextProps.tasks.length === 0) {
      console.log('componentWillUpdate ran');
      this.props.getColumns(nextProps.board._id);
      this.props.getTasks(nextProps.board._id);
    }

    if (this.props.toggledTask !== nextProps.toggledTask) {
      console.log('getTasks');
      this.props.getTasks(nextProps.board._id);
      // console.log(nextProps.tasks)
    }

    if (this.props.toggled !== nextProps.toggled) {
      console.log('getColumns');
      this.props.getColumns(nextProps.board._id);
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

    const start = this.props.columns.filter(column => column._id === source.droppableId)[0];
    const finish = this.props.columns.filter(column => column._id === destination.droppableId)[0];

    if (start._id === finish._id) {
      // Move task within a column
      const newTaskOrder = Array.from(start.taskOrder);
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);

      this.props.rearrangeColumnTasks(finish, newTaskOrder);
    } else {
      // Move task across columns
      const startTaskOrders = Array.from(start.taskOrder);
      startTaskOrders.splice(source.index, 1);

      const finishTaskOrders = Array.from(finish.taskOrder);
      finishTaskOrders.splice(destination.index, 0, draggableId);

      this.props.rearrangeColumnTasks(start, startTaskOrders);
      this.props.rearrangeColumnTasks(finish, finishTaskOrders);
    }
  }

  render() {
    const {board, tasks, columns, createColumn} = this.props;

    if (board !== null && board !== '') {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-columns" direction='horizontal' type='column'>
            {provided => (
              <Container {...provided.droppableProps} ref={provided.innerRef} >
                <Navbar history={this.props.history} />
                <BoardContent 
                  tasks={tasks}
                  board={board}
                  columns={columns}
                  provided={provided}
                  createColumn={createColumn}
                />
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      )
    } else {
      return (
        <Container>
          <Navbar history={this.props.history} />
          <Redirect />
        </Container>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.currentBoard,
    columns: state.column.columns,
    tasks: state.task.tasks,
    toggled: state.column.toggled,
    toggledTask: state.task.toggled,
    user: state.auth.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBoard: (boardId, userId) => dispatch(getBoard(boardId, userId)),
    createColumn: (columnData, board) => dispatch(createColumn(columnData, board)),
    getColumns: boardId => dispatch(getColumns(boardId)),
    rearrangeBoardColumns: (board, columnOrder) => dispatch(rearrangeBoardColumns(board, columnOrder)),
    getTasks: boardId => dispatch(getTasks(boardId)),
    rearrangeColumnTasks: (column, taskOrder) => dispatch(rearrangeColumnTasks(column, taskOrder))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);