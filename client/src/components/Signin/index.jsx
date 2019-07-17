import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

/* 
  Location: /Signin
  Purpose: Login
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
`;

const FormHeader = styled.section`
  width: 100%;
  height: 80px;
  h1 {
    font-size: 2em;
    color: black;
    font-weight: 300;
    line-height: 80px;
  }
`;

const FormBody = styled.section`
  width: 100%;
  flex: 4;
`;

class Signin extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <FormHeader>
            <h1>Sign In</h1>
          </FormHeader>
          <FormBody>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Enter Password' />
            <input type='password' placeholder='Confirm Password' />
          </FormBody>
        </Form>
      </Container>
    )
  }
}

export default Signin;