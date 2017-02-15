import React from 'react';

const tools = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexWrap: 'wrap'
}

class Slide9 extends React.Component {
  state = {
    description: [
      {
        name: 'Google Chrome DevTools.'
      },
      {
        name: 'Google PageSpeed: https://developers.google.com/speed/pagespeed.'
      },
      {
        name: 'Google Chrome Lighthouse: https://github.com/GoogleChrome/lighthouse.'
      },
      {
        name: 'Other tools: https://www.pingdom.com, https://gtmetrix.com'
      }
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return <div className="description" key={index} />;
    });

    return (
      <div style={tools}>
        {list}
      </div>
    );
  }
}

export default Slide9;

