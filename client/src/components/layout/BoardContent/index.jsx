// import React from 'react';
// import styled from 'styled-components';
// import {connect} from 'react-redux';

// import {getColumns} from '../../../store/actions/column';
// import {getTasks} from '../../../store/actions/task';

// import Column from '../Column';

// const Container = styled.section`
// min-width: 100vw;
// display: flex;
// height: 100vh;
// margin: auto;
// overflow: auto;
// flex-wrap: nowrap
// -webkit-overflow-scrolling: touch; /* [4] */
// -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */ }
// `;

// class BoardContent extends React.Component {
//   componentWillUpdate(nextProps) {
//     if (nextProps.board.columnOrder.length !== 0 && nextProps.columns.length === 0) {
//       console.log('ran')
//       this.props.getColumns(nextProps.board._id);
//       this.props.getTasks(nextProps.board._id);
//     }

//     if (this.props.tasks.length !== nextProps.tasks.length) {
//       console.log('added a new tasks');
//     }

//   }
  
//   UNSAFE_componentWillReceiveProps(nextProps) {
//     console.log('something happened')
//   }


//   displayColumns = board => {
//     return board.columnOrder.map((columnId, index) => {
//       const column = this.props.columns.filter(column => column._id === columnId);
//       if (column.length === 0) return;
//        return (
//          <Column 
//             column={column[0]} 
//             tasks={this.props.tasks}
//             taskOrder={column[0].taskOrder}
//             key={column[0]._id}
//             index={index}
//          />
//        )
//     })
//   }

//   render() {
//     const {board, provided} = this.props;
//     if (!board) return '';

//     return (
//       <Container>
//         {this.displayColumns(board)}
//         {provided.placeholder}
//       </Container>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     columns: state.column.columns,
//     tasks: state.task.tasks
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getColumns: boardId => dispatch(getColumns(boardId)),
//     getTasks: boardId => dispatch(getTasks(boardId)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BoardContent);