import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Column from '../Column';

const Container = styled.section`
min-width: 100vw;
display: flex;
height: 100vh;
margin: auto;
overflow: auto;
flex-wrap: nowrap
-webkit-overflow-scrolling: touch; /* [4] */
-ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */ }
`;

class BoardContent extends React.Component {
  displayColumns = board => {
    return board.columnOrder.map((columnId, index) => {
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
    })
  }

  render() {
    const {board, provided} = this.props;

    if (!board) return '';

    return (
      <Container>
        {this.displayColumns(board)}
        {provided.placeholder}
      </Container>
    )
  }
}

// {board.columnOrder.map((columnId, index) => {
//   const column = columns.filter(column => column._id === columnId);
//   if (column.length === 0) return;

//   return (
//     <Column 
//       column={column[0]} 
//       tasks={tasks} 
//       taskOrder={column[0].taskOrder}
//       key={column[0]._id}
//       index={index} 
//     />
//   )
// })}

const mapStateToProps = state => {
  return {
    columns: state.column.columns,
    tasks: state.task.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContent);