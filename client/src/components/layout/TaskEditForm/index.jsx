import React from 'react';
import {Modal, Screen, Form, Title, Button, Delete} from './styles';

function TaskEditForm({data, toggleModal, open, onChange, value, onSubmit, onDelete, type}) {
  if (!data) return ''
  return (
    <Modal open={open}>
      <Screen onClick={toggleModal} />
      <Form>
        <Title>{`${type}: ${data.name}`}</Title>
        <form onSubmit={onSubmit}>
          <input name='name' value={value} onChange={onChange} placeholder={`Edit ${type}`} />
          <Button>Update</Button>
        </form>
        <Delete onClick={() => onDelete(data._id)} >Click To Delete</Delete>
      </Form>
    </Modal>
  )
}

export default TaskEditForm;