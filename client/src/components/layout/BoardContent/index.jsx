import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Column from '../Column';
import ColumnForm from '../ColumnForm';
import {getTasks} from '../../../store/actions/task';

const Container = styled.section`
  min-width: 100vw;
  display: flex;
  height: 100vh;
  max-height: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: none;
  flex-wrap: nowrap
  -webkit-overflow-scrolling: touch; /* [4] */
  -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */ }
`;

class BoardContent extends React.Component {
  state = {toggle: false}
  componentDidMount() {
    if (this.props.board) {
      this.props.getTasks(this.props.board._id);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.board && nextProps.tasks.length === 0) {
      this.props.getTasks(nextProps.board._id);
    }

    if (this.props.toggledTask !== nextProps.toggledTask) {
      this.setState({toggle: !this.state.toggle});
    }
  }

  render() {
    const {board, provided, tasks, columns, createColumn} = this.props;
    return (
      <Container>
        {board.columnOrder.map((columnId, index) => {
          const column = columns.filter(column => column._id === columnId);
          if (column.length === 0) return '';

          return (
            <Column 
              column={column[0]} 
              tasks={tasks} 
              taskOrder={column[0].taskOrder}
              key={column[0]._id}
              index={index} 
              board={board}
              toggle={this.state.toggle}
            />
          )
        })}
        <ColumnForm createColumn={createColumn} board={board} />
      {provided.placeholder}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks,
    toggledTask: state.task.toggled,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: boardId => dispatch(getTasks(boardId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContent);