import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 250px;
  // For Column
  flex: 0 0 auto;
  height: 40px;
  background-color: rgba(0,0,0,0.5);
  margin-top: 75px;
  margin-left: 25px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  h3 {
    line-height: 40px;
    color: white;
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
  background-color: red;
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
  p {
    width: 120px;
    height: 30px;
    line-height: 30px;
    margin: 0;
    background: green;
    float: left;
    cursor: pointer;
  }
  button {
    width: 80px;
    height: 30px;
    background: red;
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

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.columnName);
  }

  render() {
    return (
      <Container  open={this.state.columnForm}>
        <h3 onClick={() => this.columnFormToggle()} >Add Another List</h3>
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