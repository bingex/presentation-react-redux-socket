import React from 'react';

class Slide7 extends React.Component {
  state = {
    headline: 'JavaScript optimization 1.1',
    title: 'When it comes to Javascript there are some best practices to always keep in mind.',
    description: [
      'Move your scripts to the bottom of the page right before your </body> tag.',
      'Use the async or defer directive to avoid render blocking.'
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return <li className="description" key={index}>{item}</li>;
    });

    list.splice(
      2,
      0,
      <pre key="9999" className="prettyprint notranslate">
        <code>
          <span className="tag">&lt;script</span>
          <span className="pln"> </span>
          <span className="atn">src</span>
          <span className="pun">=</span>
          <span className="atv">"async.js"</span>
          <span className="pln"> </span>
          <span className="atn">async</span>
          <span className="tag">&gt;</span>
          <span className="tag">&lt;/script&gt;</span>
          <span className="pln"><br /></span>
          <span className="tag">&lt;script</span>
          <span className="pln"> </span>
          <span className="atn">src</span>
          <span className="pun">=</span>
          <span className="atv">"defer.js"</span>
          <span className="pln"> </span>
          <span className="atn">defer</span>
          <span className="tag">&gt;</span>
          <span className="tag">&lt;/script&gt;</span>
        </code>
      </pre>
    );

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
