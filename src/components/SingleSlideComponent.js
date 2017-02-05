import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSlides } from '../actions';
import styled from 'styled-components';

class SingleSlideComponent extends React.Component {
  state = {
    slideFromServer: false
  };

  componentDidMount() {
    if (this.props.slides.length === 0) {
      this.props.fetchSlides();
    }

    this.props.socket.on('navigate', function(data) {
      this.setState({ slideFromServer: data.id });
    });
  }

  linkClickHandler = e => {
    this.props.socket.emit('slide-changed', {
      id: this.props.params.id,
      key: this.props.secret
    });
  };

  render() {
    const currSlide = this.props.slides.find(
      item => item.id === +this.props.params.id
    );

    const SlideWrapper = styled.div`
      height: 100%;
      width: 100%;
      backgroundColor: ${currSlide ? currSlide.background : 'white'}
    `;

    const nextSlide = this.props.slides.find(
      item => item.id === +this.props.params.id + 1
    );
    const prevSlide = this.props.slides.find(
      item => item.id === +this.props.params.id - 1
    );

    const slide = (
      <SlideWrapper>
        <div className="buttons">
          <Link to="/slides" className="slide-link">All</Link>
          {this.props.slides.length > 0
            ? <Link
                to={
                  `/slides/${prevSlide
                    ? prevSlide.id
                    : this.props.slides.length}`
                }
                className="slide-link"
                onClick={this.linkClickHandler}
                name="prev"
              >
                Prev
              </Link>
            : null}
          {this.props.slides.length > 0
            ? <Link
                to={`/slides/${nextSlide ? nextSlide.id : 1}`}
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
        {this.props.login
          ? this.state.slideFromServer
              ? <Redirect to={`slides/${this.state.slideFromServer}`} />
              : slide
          : <Redirect to="/login" />}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    slides: state.slides,
    login: state.login.auth
  };
}

export default connect(mapStateToProps, { fetchSlides })(SingleSlideComponent);
