import React from 'react';
import {Modal, Screen, Form, Title, Button, Delete, Error} from './styles';

class EditForm extends React.Component {
  state = {
    updatedValue: this.props.data ? this.props.data.name : '',
    error: '',
  }

  onChange = e => this.setState({updatedValue: e.target.value, error: ''})

  onUpdate = e => {
    e.preventDefault();
    if(this.state.updatedValue && this.state.updatedValue !== this.props.data.name) {
      const updatedData = {
        ...this.props.data,
        name: this.state.updatedValue
      };
      this.props.onSubmit(updatedData);
      this.props.resetState();
    } else if (this.state.updatedValue) {
      this.setState({error: `${this.props.type} field can\'t be the same`});
    } else {
      this.setState({error: `${this.props.type} field can\'t be empty`});
    }
  }

  onDelete = id => {
    if (this.props.type === 'Column') {
      this.props.onDelete(id, this.props.board);
    } else {
      this.props.onDelete(id, this.props.column);
    }
    this.props.resetState();
  }

  render() {
    const {data, toggleModal, open, type} = this.props;

    return (
      <Modal open={open}>
        <Screen onClick={toggleModal} />
        <Form>
          <Title>{`${type}: ${data.name}`}</Title>
          {this.state.error && <Error>{this.state.error}</Error>}
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