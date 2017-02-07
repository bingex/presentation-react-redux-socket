import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styled from 'styled-components';
import { fetchSlides, slideChange } from '../actions';
import { browserHistory } from 'react-router';

class SlideComponent extends React.Component {
  state = {
    next: 1,
    prev: 1
  };

  componentWillMount() {
    if (this.props.slides.length === 0) {
      this.props.fetchSlides();
    }

    this.prepareButtons(this.props.slides, +this.props.params.id)
  }

  componentWillReceiveProps(props) {
    if (props.auth !== 'granted') {
      browserHistory.push('/login');
      return false;
    }

    if (props.activeSlide && props.activeSlide !== +props.params.id) {
      browserHistory.push(`/slides/${props.activeSlide}`);
      return false;
    }

    this.prepareButtons(props.slides, +props.params.id)
  }

  prepareButtons = (slides, active) => {
    const nextItem = slides.find(item => item.id === active + 1);
    const prevItem = slides.find(item => item.id === active - 1);

    this.setState({
      next: nextItem ? nextItem.id : 1,
      prev: prevItem ? prevItem.id : slides.length
    });
  }

  linkClickHandler = e => {
    if (this.state[e.target.name]) {
      this.props.slideChange(this.state[e.target.name], this.props.secret);
    }
  };

  render() {
    const currSlide = this.props.slides.find(item => item.id === +this.props.params.id);

    const SlideWrapper = styled.div`
      height: 100vh;
      width: 100vw;
      backgroundColor: ${currSlide ? currSlide.background : 'white'};
    `;

    const slide = (
      <SlideWrapper>
        <div className="buttons">
          <Link to="/slides" className="slide-link">All</Link>
          {this.props.slides.length > 0
            ? <Link
                to={`/slides/${this.state.prev}`}
                className="slide-link"
                onClick={this.linkClickHandler}
                name="prev"
              >
                Prev
              </Link>
            : null}
          {this.props.slides.length > 0
            ? <Link
                to={`/slides/${this.state.next}`}
                className="slide-link"
                onClick={this.linkClickHandler}
                name="next"
              >
                Next
              </Link>
            : null}
        </div>
      </SlideWrapper>
    );

    return (
      <div>
        {slide}
      </div>
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

export default connect(mapStateToProps, { fetchSlides, slideChange })(SlideComponent);
