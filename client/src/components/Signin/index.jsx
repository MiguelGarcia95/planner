import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {validateForm} from '../../utils/validation';
import {signin} from '../../store/actions/auth';
import {Container, Message, Form, FormHeader, BottomLink, Button, FormBody, Error} from './styles';

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
          <FormHeader>Login</FormHeader>
          <FormBody>
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
            <Button>Login</Button>
          </FormBody>
        </Form>
        
        <BottomLink>Don't have an account? <Link to='/signup'>Sign Up</Link></BottomLink>
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