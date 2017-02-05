import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchSlides } from '../actions';

class SlidesComponent extends React.Component {
  componentDidMount() {
    this.props.fetchSlides();
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
        {this.props.login ? slides : <Redirect to="/login" />}
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

export default connect(mapStateToProps, { fetchSlides })(SlidesComponent);
