import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSlides, slideChange, refreshActiveState } from '../actions';
import { browserHistory } from 'react-router';
import Swipeable from 'react-swipeable';

class SlideComponent extends React.Component {
  state = {
    next: 1,
    prev: 1
  };

  componentWillMount() {
    if (this.props.slides.length === 0) {
      this.props.fetchSlides();
    }

    this.prepareButtons(this.props.slides, +this.props.params.id);
  }

  componentWillReceiveProps(props) {
    if (props.auth !== 'granted') {
      browserHistory.push('/login');
      return false;
    }

    this.prepareButtons(props.slides, +props.params.id);

    if (props.activeSlide && props.activeSlide !== +props.params.id) {
      browserHistory.push(`/slides/${props.activeSlide}`);
    }

    this.props.refreshActiveState();
  }

  prepareButtons = (slides, active) => {
    const nextItem = slides.find(item => item.id === active + 1);
    const prevItem = slides.find(item => item.id === active - 1);

    this.setState({
      next: nextItem ? nextItem.id : 1,
      prev: prevItem ? prevItem.id : slides.length
    });
  };

  linkClickHandler = e => {
    if (this.state[e.target.name]) {
      this.props.slideChange(this.state[e.target.name], this.props.secret);
      browserHistory.push(`/slides/${this.state[e.target.name]}`);
    }
  };

  swipedRight = () => {
    this.props.slideChange(this.state.next, this.props.secret);
    browserHistory.push(`/slides/${this.state.next}`);
  };

  swipedLeft = () => {
    this.props.slideChange(this.state.prev, this.props.secret);
    browserHistory.push(`/slides/${this.state.prev}`);
  };

  render() {
    const styl = this.props.slides.length > 0
      ? { backgroundImage: 'url(' + this.props.slides.find(item => item.id === +this.props.params.id).img + ')' }
      : {};

    return (
      <Swipeable onSwipedLeft={this.swipedRight} onSwipedRight={this.swipedLeft}>
        <div className="slide" style={styl}>
          <div className="buttons">
            <Link to="/slides" className="slide-link">All</Link>
            <button className="slide-link" onClick={this.linkClickHandler} name="prev">
              Prev
            </button>
            <button className="slide-link" onClick={this.linkClickHandler} name="next">
              Next
            </button>
          </div>
        </div>
      </Swipeable>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    slides: state.slidesReducer.slides,
    auth: state.loginReducer.auth,
    secret: state.loginReducer.secret,
    activeSlide: state.slidesReducer.activeSlide
  };
}

export default connect(mapStateToProps, { fetchSlides, slideChange, refreshActiveState })(SlideComponent);
