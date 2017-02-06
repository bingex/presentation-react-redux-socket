import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, setSecret } from '../actions';

class LoginComponent extends React.Component {
  state = {
    secret: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
    this.props.setSecret(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.secret.length > 0) {
      this.props.login(this.props.secret);
    }
  };

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <h1>Input presentation secret key</h1>

        <input
          name="secret"
          type="text"
          value={this.props.secret}
          onChange={this.handleChange}
        />
      </form>
    );

    return (
      <div>
        {this.props.auth === 'granted' ? <Redirect to="/slides" /> : form}
      </div>
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
