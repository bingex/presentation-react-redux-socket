import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    const styl = this.props.location.pathname !== '/slides'
      ? {
          overflowY: 'hidden'
        }
      : {
          overflowY: 'auto'
        };

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="stateanimation"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        className="full"
        style={styl}
      >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
      </ReactCSSTransitionGroup>
    );
  }
}

export default App;
