import React from 'react';
import {Modal, Screen, Form, Title, Button, Delete} from './styles';

function TaskEditForm({task, toggleModal, open, onTaskChange, value, onSubmit, onTaskDelete}) {
  return (
    <Modal open={open}>
      <Screen onClick={toggleModal} />
      {task && 
        <Form>
          <Title>Task: {task.name}</Title>
          <form onSubmit={onSubmit}>
            <input name='name' value={value} onChange={onTaskChange} placeholder='Edit Task' />
            <Button>Update</Button>
          </form>
          <Delete onClick={() => onTaskDelete(task._id)} >Click To Delete</Delete>
        </Form>
      }
    </Modal>
  )
}

export default TaskEditForm;