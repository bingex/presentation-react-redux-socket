import React from 'react';
import { connect } from 'react-redux';
import { login, setSecret } from '../actions';
import { browserHistory } from 'react-router';

class LoginComponent extends React.Component {
  handleChange = e => {
    this.props.setSecret(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.secret.length > 0) {
      this.props.login(this.props.secret);
    }
  };

  componentWillReceiveProps(props) {
    if (props.auth === 'granted') {
      browserHistory.push('/slides');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Input presentation secret key</h1>

        <input name="secret" type="text" value={this.props.secret} onChange={this.handleChange} />
      </form>
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
