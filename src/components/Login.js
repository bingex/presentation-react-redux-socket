import React from 'react';
import { connect } from 'react-redux';
import { login, setSecret } from '../actions';

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
      this.context.router.push('/slides');
    }
  }

  render() {
    return (
      <div>
        <form className="login" onSubmit={this.handleSubmit}>
          <h1 className="login__title">Presentation secret key:</h1>

          <div className="login__control">
            <input className="login__input" type="text" value={this.state.secret} onChange={this.handleChange} />
            <button className="login__btn" type="submit">Start</button>
          </div>
        </form>
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

LoginComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, { login, setSecret })(LoginComponent);