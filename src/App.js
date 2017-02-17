import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swipeable from 'react-swipeable';
import { Link } from 'react-router';
import { TransitionMotion, spring } from 'react-motion';
import { slideChange } from './actions';

const willEnter = () => ({
  opacity: 0,
  scale: 0.98
});

const willLeave = () => ({
  opacity: spring(0),
  scale: spring(1.02)
});

const getStyles = () => ({
  opacity: spring(1),
  scale: spring(1)
});

const RouteTransition = ({ children: child, pathname }) => (
  <TransitionMotion
    styles={ [{
      key: pathname,
      style: getStyles(),
      data: { child }
    }] }
    willEnter={ willEnter }
    willLeave={ willLeave }
  >
    { (interpolated) =>
      <div>
        { interpolated.map(({ key, style, data }) =>
          <div
            key={ `${key}-transition` }
            style={ {
              ...styles.wrapper,
              opacity: style.opacity,
              transform: `scale(${style.scale})`
            } }
          >
            { data.child }
          </div>
        ) }
      </div>
    }
  </TransitionMotion>
);

var styles = {
  wrapper: {
    position: 'absolute',
    width: '100%'
  }
};

class App extends Component {
  prevSlide = () => {
    var path;
    var pathArr;

    if (!this.props.location) {
      return false;
    }

    pathArr = this.props.location.pathname.split('/');
    if (pathArr.length === 3) {
      if (pathArr[2] > 1) {
        path = `/slides/${+pathArr[2] - 1}`;
        this.context.router.push(path);
        this.props.slideChange(path);
      }
    }
  };

  nextSlide = () => {
    var path;
    var pathArr;

    if (!this.props.location) {
      return false;
    }

    pathArr = this.props.location.pathname.split('/');
    if (pathArr.length === 3) {
      if (pathArr[2] < 11) {
        path = `/slides/${+pathArr[2] + 1}`;
        this.context.router.push(path);
        this.props.slideChange(path);
      }
    }
  };

  componentWillReceiveProps(props) {
    if (props.location && props.activeSlide && props.location.pathname !== props.activeSlide) {
      this.context.router.push(props.activeSlide);
    }
  }

  componentWillMount() {
    if (!this.props.auth) {
      this.context.router.push('/login');
    }

    window.addEventListener('keyup', e => {
      if (e.keyCode === 39) {
        this.nextSlide();
      } else if (e.keyCode === 37) {
        this.prevSlide();
      }
    });
  }

  render() {
    const buttons = (
      <div className="btn-wrapper">
        <Link className="btn" to="/slides">All</Link>
        <button className="btn" onClick={this.prevSlide}>Prev</button>
        <button className="btn" onClick={this.nextSlide}>Next</button>
      </div>
    );

    return (
      <Swipeable onSwipedLeft={this.nextSlide} onSwipedRight={this.prevSlide}>
        <RouteTransition pathname={ location.pathname }>
          {this.props.children}
          {this.props.location.pathname !== '/login' && this.props.location.pathname !== '/slides'
            ? buttons
            : null}
        </RouteTransition>
      </Swipeable>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    activeSlide: state.slidesReducer.activeSlide,
    auth: state.loginReducer.auth
  };
}

export default connect(mapStateToProps, { slideChange })(App);
