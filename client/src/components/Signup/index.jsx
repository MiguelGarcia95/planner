import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {signup} from '../../store/actions/auth';

/* 
  Location: /Signup
  Purpose: Signup/Register
  Access: Can't be Authenticated *Ignore for now*
*/ 

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  background: -webkit-linear-gradient(to bottom, #ddd, #fff);
  background: linear-gradient(to bottom, #ddd, #fff);
`;

const Form = styled.form`
  flex-direction: column;
  text-align: center;
  width: 350px;
  height: 450px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  background: #11998e;  
  background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);
  background: linear-gradient(to bottom, #38ef7d, #11998e);

  @media(max-width: 500px) {
    width: 350px;
    width: 100%;
    height: 450px;
    box-sizing: border-box; 
    margin: 0 25px;
  }
`;

const FormHeader = styled.section`
  width: 100%;
  height: 80px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  h1 {
    font-size: 2em;
    color: black;
    font-weight: 300;
    line-height: 80px;
  }
`;

const FormBody = styled.section`
  width: 100%;
  height: 370px;
  box-sizing: border-box;
  padding: 25px;
  flex: 4;
  input {
    width: 100%;
    border: none;
    height: 40px;
    margin: 10px 0;
    box-sizing: border-box;
    padding: 10px;
    background-color: transparent;
    border-bottom: 1px solid black;
    font-size: 1.2em;
  }
  input::placeholder {color: black; opacity: 1;}
  input:-ms-input-placeholder {color: black;}
  input::-ms-input-placeholder {color: black;}
  button {
    width: 100%;
    border: none;
    height: 50px;
    margin-top: 30px;
    cursor: pointer;
    color: white;
    font-size: 1.4em;
    background: linear-gradient(to bottom, #FF4B2B, #FF416C);    
    border-radius: 25px;
  }
`;

const BottomLink = styled.section`
  position: absolute;
  bottom: 0px;
  height: 50px;
  p {
    line-height: 50px;
    a {
      color: black;
      font-weight: 500;
    }
  }
`;

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    console.log('signup');

    // Validate data

    // this.props.signup({});
  }

  render() {
    const {username, email, password, password_confirmation} = this.state;
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormHeader>
            <h1>Sign Up</h1>
          </FormHeader>
          <FormBody>
            <input type='text' name='username' placeholder='Username' value={username} />
            <input type='email' name='email' placeholder='Email' value={email} />
            <input type='password' name='password' placeholder='Enter Password' value={password} />
            <input type='password' name='password_confirmation' placeholder='Confirm Password' value={password_confirmation} />
            <button>Sign Up</button>
          </FormBody>
        </Form>
        <BottomLink>
          <p>Already Signed Up? <Link to='/signin'>Login</Link> </p>
        </BottomLink>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: userData => dispatch(signup(userData)),
  }
}

export default connect(null, mapDispatchToProps)(Signup);