import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
  render() {
    return (
      <Container>
        <Form>
          <FormHeader>
            <h1>Sign Up</h1>
          </FormHeader>
          <FormBody>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Enter Password' />
            <input type='password' placeholder='Confirm Password' />
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

export default Signup;