import React from 'react';
import {Container, Title, Form, Cancel, Button} from './styles';

class ColumnForm extends React.Component {
  state = {
    columnForm: false,
    columnName: ''
  }

  columnFormToggle = () => this.setState({columnForm: !this.state.columnForm});
  setColumnName = e => this.setState({columnName: e.target.value});
  resetState = () => this.setState({columnForm: false, columnName: ''});

  onSubmit = e => {
    e.preventDefault();

    const column = {
      name: this.state.columnName,
      boardId: this.props.board._id,
    }

    this.props.createColumn(column, this.props.board);
    this.resetState();
  }

  render() {
    return (
      <Container  open={this.state.columnForm}>
        <Title onClick={() => this.columnFormToggle()} open={this.state.columnForm}>Add List</Title>
        <Form open={this.state.columnForm}>
          <form onSubmit={this.onSubmit}>
            <input name='column_name' onChange={this.setColumnName} value={this.state.columnName} />
            <Cancel onClick={() => this.columnFormToggle()}>Cancel</Cancel>
            <Button>Add</Button>
          </form>
        </Form>
      </Container>
    )
  }
}

export default ColumnForm;