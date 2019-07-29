import React, {useState} from 'react';
import styled from 'styled-components';

const Modal = styled.section`
  height: 0px;
  width: 100vw;
  max-height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 200;
  overflow: hidden;
  ${props => props.open && `
    height: 100vh;
  `}
  .toggleScreen {
    background: rgba(0,0,0,.2);
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const Form = styled.section`
  width: 300px;
  height: 300px;
  background: red;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: white;
`;

function TaskEditForm({task, toggleModal, open, onTaskChange, value}) {
  return (
    <Modal open={open}>
      <section className="toggleScreen" onClick={toggleModal}></section>
      {task && 
        <Form>
          <h1>{task.name}</h1>
          <form>
            <input name='name' value={value} onChange={onTaskChange}  />
            <button>Update</button>
          </form>
          <section className='delete' onClick={() => console.log('Delete')} >
            <p>Click To Delete</p>
          </section>
        </Form>
      }
    </Modal>
  )
}

export default TaskEditForm;