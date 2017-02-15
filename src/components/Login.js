import React from 'react';
import { connect } from 'react-redux';

import { setSecret, login } from '../actions';

import loginImg from '../data/images/main.png';

const wrapper = {
  height: '100vh',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${loginImg})`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const title = {
  fontSize: '26px',
  color: '#ffffff',
  marginBottom: '0'
}

const control = {
  display: 'flex',
  justifyContent: 'center'
}

const loginInput = {
  marginTop: '15px',
  height: '32px',
  border: 'none',
  outline: 'none',
  padding: '2px 10px',
  fontSize: '16px',
  borderRadius: '3px 0 0 3px',
  width: '220px',
  maxWidth: '90%'
}

const btn = {
  fontWeight: 'bold',
  marginTop: '15px',
  height: '36px',
  border: 'none',
  outline: 'none',
  padding: '2px 15px',
  fontSize: '16px',
  borderRadius: '0 3px 3px 0',
  color: 'white',
  backgroundColor: '#8bc34a',
  transition: 'all 0.2s linear',
  cursor: 'pointer',
}

class Login extends React.Component {
  componentWillReceiveProps(props) {
    if (props.auth) {
      this.context.router.push('/slides');
    }
  }

  handleChange = e => {
    this.props.setSecret(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.secret.length > 0) {
      this.props.login(this.props.secret);
    }
  };

  render () {
    return (
      <div style={wrapper}>
        <form onSubmit={this.handleSubmit}>
          <h1 style={title}>Presentation secret key:</h1>

          <div style={control}>
            <input style={loginInput} type="text" value={this.props.secret} onChange={this.handleChange} />
            <button style={btn} type="submit">Start</button>
          </div>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    secret: state.loginReducer.secret,
    auth: state.loginReducer.auth
  };
}

export default connect(mapStateToProps, {setSecret, login})(Login);

