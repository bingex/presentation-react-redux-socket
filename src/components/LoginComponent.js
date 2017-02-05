import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

class LoginComponent extends React.Component {
  state = {
    secret: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();

    let secret = this.state.secret;

    if (secret.length > 0) {
      this.props.login(secret);
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
        {form}
        {/* {this.props.login ? <Redirect to="/slides" /> : form} */}
      </div>
    );
  }
}

export default connect(null, { login })(LoginComponent);
