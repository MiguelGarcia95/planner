import React from 'react';
import {Modal, Screen, Form, Title, Button, Delete} from './styles';

class EditForm extends React.Component {
  state = {
    updatedValue: this.props.data ? this.props.data.name : '',
    error: '',
  }

  onChange = e => this.setState({updatedValue: e.target.value})

  onUpdate = e => {
    e.preventDefault();
    if(this.state.updatedValue) {
      const updatedData = {
        ...this.props.data,
        name: this.state.updatedValue
      };
      this.props.onSubmit(updatedData);
      this.props.resetState();
    }
  }

  onDelete = id => {
    this.props.onDelete(id, this.props.data);
    this.props.resetState();
  }

  render() {
    const {data, toggleModal, open, onSubmit, onDelete, type} = this.props;

    return (
      <Modal open={open}>
        <Screen onClick={toggleModal} />
        <Form>
          <Title>{`${type}: ${data.name}`}</Title>
          <form onSubmit={this.onUpdate}>
            <input name='name' value={this.state.updatedValue} onChange={this.onChange} placeholder={`Edit ${type}`} />
            <Button>Update</Button>
          </form>
          <Delete onClick={() => this.onDelete(data._id)} >Click To Delete</Delete>
        </Form>
      </Modal>
    )
  }
}

export default EditForm;