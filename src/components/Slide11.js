import React from 'react';
import styled from 'styled-components';

import http2 from '../data/images/http2.svg';

const Img = styled.img`
  paddingTop: 40px;

  @media (max-width: 720px) {
    display: none;
  }
`;

class Slide7 extends React.Component {
  state = {
    headline: 'JavaScript optimization 1.2',
    description: [
      'Concatenate your JS files into one file (with HTTP/2 this is no longer as important).'
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return <li className="description" key={index}>{item}</li>;
    });

    list.splice(1, 0, <Img width="700px" src={http2} alt="HTTP 2" key="9999" />);

    return (
      <div className="slide">
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper">
          <div className="sub-wrapper">
            <ul>{list}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide7;
