import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {validateForm} from '../../utils/validation';
import {signup} from '../../store/actions/auth';
import {Container, Form, FormHeader, BottomLink, Button, FormBody, Error} from './styles';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
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
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }
      this.props.signup(newUser);
    } else {
      this.setState({errors: validation.errors})
    }
  }

  render() {
    const {username, email, password, password_confirmation, errors} = this.state;
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormHeader>Sign Up</FormHeader>
          <FormBody>
            {errors.username && <Error>{errors.username.error}</Error>}
            <input 
              className={`${errors.username ? 'error' : ''}`}
              type='text' 
              name='username' 
              placeholder='Username' 
              value={username} 
              onChange={this.onChange} 
            />

            {errors.email && <Error>{errors.email.error}</Error>}
            <input 
              className={`${errors.email ? 'error' : ''}`}
              type='email' 
              name='email' 
              placeholder='Email' 
              value={email} 
              onChange={this.onChange} 
            />

            {errors.password && <Error>{errors.password.error}</Error>}
            <input 
              className={`${errors.password ? 'error' : ''}`}
              type='password' 
              name='password' 
              placeholder='Enter Password' 
              value={password} 
              onChange={this.onChange} 
            /> 

            {errors.password_confirmation && <Error>{errors.password_confirmation.error}</Error>}
            <input 
              className={`${errors.password_confirmation ? 'error' : ''}`}
              type='password' 
              name='password_confirmation' 
              placeholder='Confirm Password' 
              value={password_confirmation} 
              onChange={this.onChange} 
            />

            <Button>Sign Up</Button>
          </FormBody>
        </Form>

        <BottomLink>Already Signed Up? <Link to='/login'>Login</Link></BottomLink>
        
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
    signup: userData => dispatch(signup(userData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);