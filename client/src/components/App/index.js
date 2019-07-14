import React from 'react';
import Column from './column';
import './styles.css';
import initialData from '../sampleData';

class App extends React.Component {
  state  = initialData;
  
  render() {
    // return (
    //   <div className="App">

    //   </div>
    // );
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

export default App;
