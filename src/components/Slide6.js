import React from 'react';

class Slide6 extends React.Component {
  state = {
    headline: 'Optimizing css',
    title: 'Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering.',
    description: [
      'CSS is a render blocking resource. Get it to the client as soon and as quickly as possible to optimize the time to first render.',
      'Media types and media queries allow us to mark some CSS resources as non-render blocking.',
      'The browser downloads all CSS resources, regardless of blocking or non-blocking behavior.'
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

export default Slide6;
