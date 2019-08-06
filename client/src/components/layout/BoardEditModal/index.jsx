import React from 'react';
import {SliderPicker} from 'react-color';
import {Label, Screen, Modal, Delete, Button, Form, Error} from './styles';

function BoardEditModal({board, toggleModal, onBoardChange, onSubmit, onBoardDelete, onColorChange, state}) {
  return (
    <Modal open={state.modal}>
      <Screen onClick={toggleModal} />
      {board && 
        <Form>
          <h1>Board: {board.name}</h1>
          {state.error && <Error>{state.error}</Error>}
          <form onSubmit={onSubmit}>
            <input name='name' value={state.newBoardName} onChange={onBoardChange} placeholder='New Board Name' />
            <Button>Update</Button>
            <Label>Background Color</Label>
            <SliderPicker onChange={e => onColorChange(e.hex, 'board_color')} color={state.board_color} />
            <Label>Text Color</Label>
            <SliderPicker onChange={e => onColorChange(e.hex, 'text_color')} color={state.text_color} />
          </form>
          <Delete onClick={() => onBoardDelete(board._id)} >Click To Delete</Delete>
        </Form>
      }
    </Modal>
  )
}

export default BoardEditModal;