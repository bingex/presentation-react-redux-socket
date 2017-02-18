import React from 'react';

class Slide9 extends React.Component {
  state = {
    headline: 'Optimizing css',
    title: 'Make sure to keep your CSS clean, deliver it as quickly as possible, and use media types and queries to unblock rendering.',
    description: [
      'CSS is a render blocking resource. Deliver it as soon and as quickly as possible. Put CSS in the document head.',
      'Media types and media queries allow us to mark some CSS resources as non-render blocking.',
      'Avoid CSS imports ( @import ).',
      'Inline the critical CSS, render-blocking CSS directly into the HTML document.'
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
          <span className="tag">&lt;link</span>
          <span className="pln"> </span>
          <span className="atn">href</span>
          <span className="pun">=</span>
          <span className="atv">"style.css"</span>
          <span className="pln"> </span>
          <span className="atn">rel</span>
          <span className="pun">=</span>
          <span className="atv">"stylesheet"</span>
          <span className="tag">&gt;</span>
          <span className="pln"><br /></span>
          <span className="tag">&lt;link</span>
          <span className="pln"> </span>
          <span className="atn">href</span>
          <span className="pun">=</span>
          <span className="atv">"print.css"</span>
          <span className="pln"> </span>
          <span className="atn">rel</span>
          <span className="pun">=</span>
          <span className="atv">"stylesheet"</span>
          <span className="pln"> </span>
          <span className="atn">media</span>
          <span className="pun">=</span>
          <span className="atv">"print"</span>
          <span className="tag">&gt;</span>
          <span className="pln"><br /></span>
          <span className="tag">&lt;link</span>
          <span className="pln"> </span>
          <span className="atn">href</span>
          <span className="pun">=</span>
          <span className="atv">"other.css"</span>
          <span className="pln"> </span>
          <span className="atn">rel</span>
          <span className="pun">=</span>
          <span className="atv">"stylesheet"</span>
          <span className="pln"> </span>
          <span className="atn">media</span>
          <span className="pun">=</span>
          <span className="atv">"(min-width: 40em)"</span>
          <span className="tag">&gt;</span>
          <span className="pln"><br /></span>
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

export default Slide9;
