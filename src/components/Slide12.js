import React from 'react';

class Slide12 extends React.Component {
  state = {
    headline: 'Rendering optimization',
    title: 'Pages should not only load quickly, but also run well; scrolling should be stick-to-finger fast, and animations should be smooth.',
    description: [
      'Avoid setTimeout or setInterval for visual updates; always use requestAnimationFrame instead.',
      'Reduce the complexity of your selectors; use a class-centric methodology like BEM.'
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return <li className="description" key={index}>{item}</li>;
    });

    list.splice(
      2,
      0,
      <pre key="9998" className="prettyprint notranslate">
        <code>
          <span>.box:nth-</span>
          <span className="tag">last</span>
          <span>-child(-n+</span>
          <span className="atn">1</span>
          <span>) .title &#123;</span>
          <span className="pln"><br /></span>
          <span className="atn">  /* styles */</span>
          <span className="pln"><br /></span>
          <span>&#125;</span>
        </code>
      </pre>
    );

    list.splice(
      3,
      0,
      <pre key="9999" className="prettyprint notranslate">
        <code>
          <span className="tag">final</span>
          <span>-box-title &#123;</span>
          <span className="pln"><br /></span>
          <span className="atn">  /* styles */</span>
          <span className="pln"><br /></span>
          <span>&#125;</span>
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

export default Slide12;
