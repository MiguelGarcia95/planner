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
  width: 300px; height: 300px;
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  margin: auto;
  background: rgb(240,240,240);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.3);
  text-align: center;
  h1 {
    height: 80px;
    margin: 0;
    margin-top: 10px;
    font-size: 1.2em;
  }
  form {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 20px;
    height: 180px;
    margin: 0;
    input, button {
      width: 100%;
      box-sizing: border-box;
      border: none;
      height: 40px;
    }
    input {
      padding: 5px;
      background: rgb(250,250,250);
    }
    button {
      background: rgb(100,180,100);
      color: white;
      cursor: pointer;
    }
  }
  .delete {
    width: 100%;
    height: 40px;
    background: rgb(213,78,78);
    color: white;
    cursor: pointer;
    p {
      line-height: 40px;
    }
  }
`;

function TaskEditForm({task, toggleModal, open, onTaskChange, value, onSubmit, deleteTask, column}) {
  return (
    <Modal open={open}>
      <section className="toggleScreen" onClick={toggleModal}></section>
      {task && 
        <Form>
          <h1>Task: {task.name}</h1>
          <form onSubmit={onSubmit}>
            <input name='name' value={value} onChange={onTaskChange} placeholder='Edit Task' />
            <button>Update</button>
          </form>
          <section className='delete' onClick={() => deleteTask(task._id, column)} >
            <p>Click To Delete</p>
          </section>
        </Form>
      }
    </Modal>
  )
}

export default TaskEditForm;