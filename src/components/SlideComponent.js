import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSlides, slideChange } from '../actions';
import { browserHistory } from 'react-router';
import Swipeable from 'react-swipeable';

// import firstImg from '../data/images/slides/1.jpeg';
// import secondImg from '../data/images/slides/2.jpeg';
// import thirdImg from '../data/images/slides/3.jpg';

class SlideComponent extends React.Component {
  state = {
    next: 1,
    prev: 1,
    img: ''
  };

  componentWillMount() {
    if (this.props.slides.length === 0) {
      this.props.fetchSlides();
    }

    this.prepareButtons(this.props.slides, +this.props.params.id);
    this.setActiveBg(this.props.slides, +this.props.params.id);
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

    this.prepareButtons(props.slides, +props.params.id);
    this.setActiveBg(props.slides, +props.params.id);
  }

  prepareButtons = (slides, active) => {
    const nextItem = slides.find(item => item.id === active + 1);
    const prevItem = slides.find(item => item.id === active - 1);

    this.setState({
      next: nextItem ? nextItem.id : 1,
      prev: prevItem ? prevItem.id : slides.length
    });
  };

  setActiveBg = (slides, active) => {
    let activeImg = slides.find(item => item.id === active);

    if (activeImg) {
      this.setState({ img: activeImg.img });
    }
  };

  linkClickHandler = e => {
    if (this.state[e.target.name]) {
      this.props.slideChange(this.state[e.target.name], this.props.secret);
    }
  };

  swipedRight = () => {
    this.props.slideChange(this.state.next, this.props.secret);
    // this.setActiveBg(this.props.slides, +this.props.params.id);
  };

  swipedLeft = () => {
    this.props.slideChange(this.state.prev, this.props.secret);
    // sthis.setActiveBg(this.props.slides, +this.props.params.id);
  };

  render() {
    const imgBg = {
      backgroundImage: 'url(' + this.state.img + ')'
    };

    return (
      <Swipeable onSwipedLeft={this.swipedRight} onSwipedRight={this.swipedLeft}>
        <div className="slide" style={imgBg}>
          <div className="buttons">
            <Link to="/slides" className="slide-link">All</Link>
            <Link to={`/slides/${this.state.prev}`} className="slide-link" onClick={this.linkClickHandler} name="prev">
              Prev
            </Link>
            <Link to={`/slides/${this.state.next}`} className="slide-link" onClick={this.linkClickHandler} name="next">
              Next
            </Link>
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

export default connect(mapStateToProps, { fetchSlides, slideChange })(SlideComponent);
