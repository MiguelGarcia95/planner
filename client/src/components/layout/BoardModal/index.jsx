import React from 'react';
import { SliderPicker  } from 'react-color';
import {Container, ModalBackground, Modal, Form, Title, Label, Button, Error} from './styles';

function BoardModal({toggle, onFormChange, onSubmit, onColorChange, state, error}) {
  return (
    <Container isOpened={state.boardModal} >
      <ModalBackground  onClick={() => toggle()} />
      <Modal>
        <Form onSubmit={onSubmit} >
          <Title>Create New Board</Title>
          {error && <Error>{error}</Error>}
          <input type='text' name='board_name' onChange={onFormChange} placeholder='Board Name' value={state.board_name} />
          <Label>Background Color</Label>
          <SliderPicker onChange={e => onColorChange(e.hex, 'board_color')} color={state.board_color}/>
          <Label>Text Color</Label>
          <SliderPicker onChange={e => onColorChange(e.hex, 'text_color')} color={state.text_color}/>
          <Button>Submit</Button>
        </Form>
      </Modal>
    </Container>
  )
}

export default BoardModal;