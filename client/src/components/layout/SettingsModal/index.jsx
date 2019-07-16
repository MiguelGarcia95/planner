import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.section`
  flex-basis: 50%;
  height: 500px;
  background: white;

`;

function SettingsModal() {
  return (
    <Container>
      <Modal></Modal>
    </Container>
  )
}

export default SettingsModal;