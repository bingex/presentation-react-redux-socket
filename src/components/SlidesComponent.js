import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSlides, slideChange } from '../actions';
import { browserHistory } from 'react-router';

class SlidesComponent extends React.Component {
  componentDidMount() {
    this.props.fetchSlides();
  }

  componentWillReceiveProps(props) {
    if (props.auth !== 'granted') {
      browserHistory.push('/login');
      return false;
    }
  }

  clickHandler(id) {
    this.props.slideChange(id, this.props.secret);
  }

  render() {
    const slides = this.props.slides.map(item => {
      return (
        <Link
          to={`/slides/${item.id}`}
          key={item.id}
          className="card"
          onClick={() => this.clickHandler(item.id)}
          style={{ backgroundImage: 'url(' + item.img + ')' }}
        >
          <h4>{item.title}</h4>
        </Link>
      );
    });

    return (
      <div className="card-wrapper">
        {this.props.auth === 'granted' ? slides : ''}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    slides: state.slidesReducer.slides,
    auth: state.loginReducer.auth,
    secret: state.loginReducer.secret
  };
}

export default connect(mapStateToProps, { fetchSlides, slideChange })(SlidesComponent);
