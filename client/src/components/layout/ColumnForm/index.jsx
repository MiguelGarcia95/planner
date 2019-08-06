import React from 'react';
import {Container, Title, Form, Cancel, Button, Error} from './styles';

class ColumnForm extends React.Component {
  state = {
    columnForm: false,
    columnName: '',
    error: ''
  }

  columnFormToggle = () => this.setState({columnForm: !this.state.columnForm});
  setColumnName = e => this.setState({columnName: e.target.value, error: ''});
  resetState = () => this.setState({columnForm: false, columnName: ''});

  onSubmit = e => {
    e.preventDefault();

    if (this.state.columnName) {
      const column = {
        name: this.state.columnName,
        boardId: this.props.board._id,
      }
      this.props.createColumn(column, this.props.board);
      this.resetState();
    } else {
      this.setState({error: 'List Name can\'t be empty'});
    }
  }

  render() {
    return (
      <Container  open={this.state.columnForm}>
        <Title onClick={() => this.columnFormToggle()} open={this.state.columnForm}>Add List</Title>
        <Form open={this.state.columnForm}>
          <form onSubmit={this.onSubmit}>
            {this.state.error && <Error>{this.state.error}</Error>}
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