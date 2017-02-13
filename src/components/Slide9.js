import React from 'react';
import styled from 'styled-components';

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
      <Tools>
        {list}
      </Tools>
    );
  }
}

export default Slide9;

const Tools = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;
