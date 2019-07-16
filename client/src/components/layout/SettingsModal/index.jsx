import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 0px;
  overflow: hidden;
  background: rgba(0,0,0,0.5);
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
  flex-basis: 50%;
  height: 500px;
  background: white;
`;

function SettingsModal({isOpen, toggle}) {
  return (
    <Container isOpened={isOpen} >
      <p onClick={() => toggle()} >X</p>
      <Modal></Modal>
    </Container>
  )
}

export default SettingsModal;