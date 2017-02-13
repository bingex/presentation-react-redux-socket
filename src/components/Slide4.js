import React from 'react';

class Slide4 extends React.Component {
  state = {
    headline: 'Optimizing resources',
    title: 'The best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources.',
    description: ['Minify your code.', 'Uglify your code.', 'Use GZIP.']
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

export default Slide4;
