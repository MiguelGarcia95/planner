import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {validateForm} from '../../utils/validation';
import {signin} from '../../store/actions/auth';
import {Container, Message, Form, FormHeader, BottomLink} from './styles';

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

    const validation = validateForm(this.state);

    if (validation.valid) {
       const newUser = {
        email: this.state.email,
        password: this.state.password,
      }
      this.props.signin(newUser);
    } else {
      this.setState({errors: validation.errors})
    }
  }

  render() {
    const {email, password, errors} = this.state;
    return (
      <Container>
        <Message>
          <p><strong>email:</strong> admin@admin.com</p>
          <p><strong>password:</strong> password123</p>
        </Message>
        <Form onSubmit={this.onSubmit}>
          <FormHeader>
            Login
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