import React from 'react';
import { connect } from 'react-redux';
import { login, setSecret } from '../actions';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import loginImage from '../data/images/login.png';

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  backgroundRepeat: no-repeat;
  backgroundPosition: center;
  backgroundImage: url(${loginImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

class LoginComponent extends React.Component {
  state = {
    secret: ''
  };

  handleChange = e => {
    this.setState({ secret: e.target.value });
    this.props.setSecret(this.secret);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.secret.length > 0) {
      this.props.login(this.state.secret);
    }
  };

  componentWillReceiveProps(props) {
    if (props.auth === 'granted') {
      browserHistory.push('/slides');
    }
  }

  render() {
    return (
      <LoginWrapper>
        <form className="login" onSubmit={this.handleSubmit}>
          <h1 className="login__title">Input presentation secret key:</h1>

          <div className="login__control">
            <input className="login__input" type="text" value={this.state.secret} onChange={this.handleChange} />
            <button className="login__btn" type="submit">Start</button>
          </div>
        </form>
      </LoginWrapper>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    auth: state.loginReducer.auth,
    secret: state.loginReducer.secret
  };
}

export default connect(mapStateToProps, { login, setSecret })(LoginComponent);
