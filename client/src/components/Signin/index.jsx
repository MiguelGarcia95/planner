import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {signin} from '../../store/actions/auth';

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

  .message {
    width: 200px;
    height: 60px;
    position: absolute;
    top: 20px;
    text-align: center;
    p {line-height: 30px; margin: 0;}
  }
`;

const Form = styled.form`
  flex-direction: column;
  text-align: center;
  width: 350px;
  height: 390px;
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
  height: 310px;
  box-sizing: border-box;
  padding: 25px;
  flex: 4;
  position: relative;
  input {
    width: 100%;
    border: none;
    height: 40px;
    margin: 15px 0;
    box-sizing: border-box;
    padding: 10px;
    background-color: transparent;
    border-bottom: 1px solid black;
    font-size: 1.2em;
  }
  input.error {
    background: rgba(255,50,50,0.5);
    outline: 1px solid red;
    margin: 5px 0;
  }
  .input_error {
    margin: 0;
  }
  input::placeholder {color: black; opacity: 1;}
  input:-ms-input-placeholder {color: black;}
  input::-ms-input-placeholder {color: black;}
  button {
    border: none;
    height: 50px;
    cursor: pointer;
    color: white;
    font-size: 1.4em;
    background: linear-gradient(to bottom, #FF4B2B, #FF416C);    
    border-radius: 25px;
    position: absolute;
    margin: auto;
    left: 0; right: 0;
    bottom: 20px;
    width: 90%;
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

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentDidMount() {
    this.redirectIfAuth(this.props);
  }

  componentDidUpdate(prevProps) {
    this.redirectIfAuth(this.props);
  }

  redirectIfAuth = props => {
    if (props.user) {
      props.history.push('/');
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      }
    })
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.validateForm(this.state)) {
       const newUser = {
        email: this.state.email,
        password: this.state.password,
      }
      this.props.signin(newUser);
    }
  }

  validateForm = formData => {
    let errors = {};
    let valid = true;

    if (formData.username || formData.username === '') {
      if (formData.username === '') {
        errors.username = {error: 'Username can\'t be empty'}
        valid = false;
      }
    }

    if (formData.email === '') {
      errors.email = {error: 'Email can\'t be empty'}
      valid = false;
    } else if (!this.validateEmail(formData.email)) {
      errors.email = {error: 'Your email is invalid.'}
      valid = false;
    } 

    if (formData.password === '') {
      errors.password = {error: 'Password can\'t be empty'}
      valid = false;
    } else if (formData.password.length < 5) {
      errors.password = {error: 'Password can\'t be less than 6 characters.'}
      valid = false;
    }

    if (formData.password_confirmation || formData.password_confirmation === '') {
      if (formData.password_confirmation === '') {
        errors.password_confirmation = {error: 'Password can\'t be empty'}
        valid = false;
      } else if (formData.password !== formData.password_confirmation) {
        errors.password_confirmation = {error: 'Password is not the same'}
        valid = false;
      }
    }

    this.setState({errors});
    return valid;
  }
  
  validateEmail(email) {
    var regexString = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexString.test(email.toLowerCase());
  }

  render() {
    const {email, password, errors} = this.state;
    return (
      <Container>
        <section className='message'>
          <p><strong>email:</strong> admin@admin.com</p>
          <p><strong>password:</strong> password123</p>
        </section>
        <Form onSubmit={this.onSubmit}>
          <FormHeader>
            <h1>Login</h1>
          </FormHeader>
          <FormBody>
            {errors.email && (
              <p className='input_error'>{errors.email.error}</p>
            )}
            <input 
              className={`${errors.email ? 'error' : ''}`}
              type='email' 
              name='email' 
              placeholder='Email' 
              value={email} 
              onChange={this.onChange} 
            />
            {errors.password && (
              <p className='input_error'>{errors.password.error}</p>
            )}
            <input 
              className={`${errors.password ? 'error' : ''}`}
              type='password' 
              name='password' 
              placeholder='Enter Password' 
              value={password} 
              onChange={this.onChange} 
            />
            <button>Login</button>
          </FormBody>
        </Form>
        
        <BottomLink>
          <p>Don't have an account? <Link to='/signup'>Sign Up</Link> </p>
        </BottomLink>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signin: userData => dispatch(signin(userData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);