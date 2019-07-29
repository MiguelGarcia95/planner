import React from 'react';
import styled from 'styled-components';

const Modal = styled.section`
  height: 0px;
  width: 100vw;
  max-height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 200;
  ${props => props.open && `
    height: 100vh;
  `}
  .toggleScreen {
    background: rgba(0,0,0,.2);
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .taskModal {
    width: 200px;
  position: absolute;
  }
`;

function TaskEditForm({task, toggleModal, open}) {
  return (
    <Modal open={open} >
      <section className="toggleScreen" onClick={toggleModal}></section>
      <h1>{task && task.name}</h1>
    </Modal>
  )
}

export default TaskEditForm;