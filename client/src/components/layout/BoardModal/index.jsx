import React from 'react';
import styled from 'styled-components';
import { SliderPicker  } from 'react-color';
import {Container, ModalBackground, Modal, Form} from './styles';

function BoardModal({toggle, onFormChange, onSubmit, onColorChange, state}) {
  return (
    <Container isOpened={state.boardModal} >
      <ModalBackground  onClick={() => toggle()} />
      <Modal>
        <Form onSubmit={onSubmit} >
          <h1>Create New Board</h1>
          <input type='text' name='board_name' onChange={onFormChange} placeholder='Board Name' value={state.board_name} />
          <p className='label'>Background Color</p>
          <SliderPicker onChange={e => onColorChange(e.hex, 'board_color')} color={state.board_color}/>
          <p className='label'>Text Color</p>
          <SliderPicker onChange={e => onColorChange(e.hex, 'text_color')} color={state.text_color}/>
          <button >Submit</button>
        </Form>
      </Modal>
    </Container>
  )
}

export default BoardModal;