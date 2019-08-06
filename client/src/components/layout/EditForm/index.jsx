import React from 'react';
import {Modal, Screen, Form, Title, Button, Delete} from './styles';

// onUpdate

// onDelete

// 

class EditForm extends React.Component {
  state = {
    updatedValue: this.props.data ? this.props.data.name : '',
    error: '',
  }

  onChange = e => this.setState({updatedValue: e.target.value})

  onUpdate = () => {

  }

  onDelete = () => {

  }

  render() {
    const {data, toggleModal, open, onChange, value, onSubmit, onDelete, type} = this.props;

    return (
      <Modal open={open}>
        <Screen onClick={toggleModal} />
        <Form>
          <Title>{`${type}: ${data.name}`}</Title>
          <form onSubmit={onSubmit}>
            <input name='name' value={this.state.updatedValue} onChange={this.onChange} placeholder={`Edit ${type}`} />
            <Button>Update</Button>
          </form>
          <Delete onClick={() => onDelete(data._id)} >Click To Delete</Delete>
        </Form>
      </Modal>
    )
  }
}

export default EditForm;