import React from 'react';

class Slide3 extends React.Component {
  state = {
    headline: 'Eliminating unnecessary downloads',
    title: 'To deliver great performance we need to optimize delivery of each and every byte!',
    description: [
      'Inventory your own assets and third-party assets on your pages.',
      'Measure the performance of each asset: its value and its technical performance.',
      'Determine if the resources are providing sufficient value.'
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

export default Slide3;
