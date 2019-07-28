import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 250px;
  // For Column
  flex: 0 0 auto;
  height: 40px;
  margin-top: 75px;
  padding: 0 25px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  h3 {
    line-height: 40px;
    color: white;
    background-color: rgba(0,0,0,0.5);
    font-weight: 400;
    overflow: hidden;
  }
  ${props => props.open && `
    height: 80px;
    h3 {
      height: 0px;
    }
  `}
`;

const Form = styled.section`
  width: 250px;
  height: 0px;
  background: rgb(240,240,240);
  overflow: hidden;
  input {
    width: 230px;
    height: 30px;
    box-sizing: border-box;
    padding: 2px;
    margin: 10px 0;
    margin-top: 10px;
    border: none;
  }
  p, button {
    width: 120px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin: 0;
    color: white;
  }
  p {
    background: rgb(213,78,78);
    float: left;
  }
  button {
    background: rgb(100,180,100);
    float: right;
    border: none;
  }
  ${props => props.open && `
    height: 80px; 
  `}
`;

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
        <h3 onClick={() => this.columnFormToggle()} >Add List</h3>
        <Form open={this.state.columnForm}>
          <form onSubmit={this.onSubmit}>
            <input name='column_name' onChange={this.setColumnName} value={this.state.columnName} />
            <p onClick={() => this.columnFormToggle()}>Cancel</p>
            <button>Add</button>
          </form>
        </Form>
      </Container>
    )
  }
}

export default ColumnForm;