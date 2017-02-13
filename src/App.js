import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swipeable from 'react-swipeable';
import { slideChange } from './actions';

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
      if (pathArr[2] < 10) {
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
    window.addEventListener('keyup', e => {
      if (e.keyCode === 39) {
        this.nextSlide();
      } else if (e.keyCode === 37) {
        this.prevSlide();
      }
    });
  }

  render() {
    return (
      <Swipeable onSwipedLeft={this.nextSlide} onSwipedRight={this.prevSlide}>
        {this.props.children}

        <div className="btn-wrapper">
          <button className="btn" onClick={this.prevSlide}>Prev</button>
          <button className="btn" onClick={this.nextSlide}>Next</button>
        </div>
      </Swipeable>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    activeSlide: state.slidesReducer.activeSlide
  };
}

export default connect(mapStateToProps, { slideChange })(App);
