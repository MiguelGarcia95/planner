import React from 'react';
import styled from 'styled-components';

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
  render() {
    const {board, provided, tasks, columns} = this.props;
    if (!board) return <br/>;
    return (
      <Container>
        {board.columnOrder.map((columnId, index) => {
          const column = columns.filter(column => column._id === columnId);
          if (column.length === 0) return;

          return (
            <Column 
              column={column[0]} 
              tasks={tasks} 
              taskOrder={column[0].taskOrder}
              key={column[0]._id}
              index={index} 
            />
          )
        })}
      {provided.placeholder}
      </Container>
    )
  }
}

export default BoardContent;