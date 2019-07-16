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
  width: 80%;
  max-width: 500px;
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  background-color: rgba(50,50,200,0.5);
  text-align: center;
  input, button {
    width: 100%;
    border: none;
  }
  input {
    height: 50px;
    margin: 25px 0;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 2px solid white;
    background-color: transparent;
  }

  input::placeholder {color: white; opacity: 1;}
  input:-ms-input-placeholder {color: white;}
  input::-ms-input-placeholder {color: white;}

  button {
    height: 100px;
  }
`;



function BoardModal({isOpen, toggle, onFormChange, onSubmit}) {
  return (
    <Container isOpened={isOpen} >
      <ModalBackground  onClick={() => toggle()} />
      <Modal>
        <Form onSubmit={onSubmit} >
          <input type='text' name='board_name' onChange={onFormChange} placeholder='Board Name' />
          <input type='text' name='board_color' onChange={onFormChange} placeholder='Background Color' />
          <button >Submit</button>
        </Form>
      </Modal>
    </Container>
  )
}

export default BoardModal;