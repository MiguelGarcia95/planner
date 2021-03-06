import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Redirect from '../layout/Redirect';
import BoardContent from '../layout/BoardContent';
import {Container} from './styles';

import {getBoard, rearrangeBoardColumns} from '../../store/actions/board';
import {getColumns, rearrangeColumnTasks} from '../../store/actions/column';

class Board extends React.Component {
  state = {toggle: false}

  componentDidMount() {
    if (this.props.user) {
      this.props.getBoard(this.props.match.params.boardId, this.props.user._id);
    }

    if (this.props.board && this.props.board.columnOrder.length !== 0 && this.props.columns.length === 0) {
      this.props.getColumns(this.props.board._id);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.user && !this.props.user) {
      this.props.getBoard(this.props.match.params.boardId, nextProps.user._id);
    }

    if (nextProps.board && nextProps.board.columnOrder.length !== 0 && nextProps.columns.length === 0) {
      this.props.getColumns(nextProps.board._id);
    }

    if (this.props.toggled !== nextProps.toggled) {
      this.setState({toggle: !this.state.toggle});
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
    const {board, columns} = this.props;

    if (board !== null && board !== '') {
      return (
        <DragDropContext onDragEnd={this.onDragEnd} >
          <Droppable droppableId="all-columns" direction='horizontal' type='column'>
            {provided => (
              <Container {...provided.droppableProps} ref={provided.innerRef} bgColor={board.bgColor} >
                <Navbar history={this.props.history} />
                <BoardContent 
                  board={board}
                  columns={columns}
                  provided={provided}
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
    toggled: state.column.toggled,
    user: state.auth.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBoard: (boardId, userId) => dispatch(getBoard(boardId, userId)),
    getColumns: boardId => dispatch(getColumns(boardId)),
    rearrangeBoardColumns: (board, columnOrder) => dispatch(rearrangeBoardColumns(board, columnOrder)),
    rearrangeColumnTasks: (column, taskOrder) => dispatch(rearrangeColumnTasks(column, taskOrder))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);