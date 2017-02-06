import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSlides, slideChange } from '../actions';
import styled from 'styled-components';

class SlideComponent extends React.Component {
  state = {
    next: 1,
    prev: 1
  };

  componentDidMount() {
    if (this.props.slides.length === 0) {
      this.props.fetchSlides();
    }

    const nextItem = this.props.slides.find(item => item.id === +this.props.params.id + 1);
    const prevItem = this.props.slides.find(item => item.id === +this.props.params.id - 1);

    this.setState({
      next: nextItem ? nextItem.id : 1,
      prev: prevItem ? prevItem.id : this.props.slides.length
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
        {this.props.auth === 'granted'
          ? this.props.activeSlide !== +this.props.params.id
              ? <Redirect push to={`/slides/${this.props.activeSlide}`} />
              : slide
          : <Redirect to="/login" />}
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
