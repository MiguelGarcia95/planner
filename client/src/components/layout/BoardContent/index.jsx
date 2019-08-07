import React from 'react';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import Column from '../Column';
import ColumnForm from '../ColumnForm';
import {getTasks} from '../../../store/actions/task';
import {createColumn} from '../../../store/actions/column';

import {Container} from './styles';

class BoardContent extends React.Component {
  state = {toggle: false}
  componentDidMount() {
    if (this.props.board) 
      this.props.getTasks(this.props.board._id);
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
      <Scrollbars style={{ width: '100%', height: '100%' }}>
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

      </Scrollbars>
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
    createColumn: (columnData, board) => dispatch(createColumn(columnData, board)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContent);