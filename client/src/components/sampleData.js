const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the trash'},
    'task-2': {id: 'task-2', content: 'Watch the new episode'},
    'task-3': {id: 'task-3', content: 'Shitpost'},
    'task-4': {id: 'task-4', content: 'Snipe noobs on csgo'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    // 'column-3': {
    //   id: 'column-3',
    //   title: 'Done',
    //   taskIds: [],
    // },
  },
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;