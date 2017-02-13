import React from 'react';

class Slide8 extends React.Component {
  state = {
    headline: 'Rendering perfomance',
    title: 'Pages should not only load quickly, but also run well; scrolling should be stick-to-finger fast, and animations and interactions should be silky smooth.',
    description: [
      'Avoid setTimeout or setInterval for visual updates; always use requestAnimationFrame instead',
      'Reduce the complexity of your selectors; use a class-centric methodology like BEM.',
      'Reduce the number of elements on which style calculation must be calculated.'
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return <li className="description" key={index}>{item}</li>;
    });

    return (
      <div className="slide">
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper">
          <div className="sub-wrapper">
            <p className="title">{this.state.title}</p>

            <ul>{list}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide8;
