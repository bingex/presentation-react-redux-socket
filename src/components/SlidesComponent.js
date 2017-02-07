import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSlides } from '../actions';
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

  render() {
    const slides = this.props.slides.map(item => {
      return (
        <div key={item.id} className="card">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <Link to={`/slides/${item.id}`} className="card-link">Open slide</Link>
        </div>
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
    auth: state.loginReducer.auth
  };
}

export default connect(mapStateToProps, { fetchSlides })(SlidesComponent);
