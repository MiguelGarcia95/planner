import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 0px;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.5s;
  ${props => props.isOpened && `
    height: 100vh;
  `}
`;

const Modal = styled.section`
  width: 50%;
  height: 500px;
  background: white;
  position: absolute;
  z-index: 2;
`;

const ModalBackground = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  cursor: pointer;
`;


function SettingsModal({isOpen, toggle, onFormChange, onSubmit}) {
  return (
    <Container isOpened={isOpen} >
      <ModalBackground  onClick={() => toggle()} />
      <Modal>
        <input type='text' name='nav_color' onChange={onFormChange} />
        <input type='text' name='nav_text_color' onChange={onFormChange} />
        <input type='text' name='background_color' onChange={onFormChange} />
        <button onClick={onSubmit}>Submit</button>
      </Modal>
    </Container>
  )
}

export default SettingsModal;