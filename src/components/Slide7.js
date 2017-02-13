import React from 'react';

class Slide7 extends React.Component {
  state = {
    headline: 'JavaScript optimization',
    title: 'When it comes to Javascript there are some best practices to always keep in mind.',
    description: [
      'Move your scripts to the bottom of the page right before your </body> tag.',
      'Use the async or defer directive to avoid render blocking.',
      'Concatenate your JS files into one file (with HTTP/2 this is no longer as important).',
      'Inline your javascript if it is small.'
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

export default Slide7;
