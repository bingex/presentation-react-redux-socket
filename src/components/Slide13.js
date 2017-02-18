import React from 'react';
import styled from 'styled-components';

import devTools from '../data/images/devtools.png';
import pageSpeed from '../data/images/pagespeed.png';
import lighthouse from '../data/images/lighthouse.png';
import pingdom from '../data/images/pingdom.png';

import { devs, dev, title, twitter, name } from './Slide14';

const Url = styled.span`
  @media (max-width: 720px) {
    display: none;
  }
`;

class Slide13 extends React.Component {
  state = {
    headline: 'Tools',
    description: [
      {
        name: 'Google Chrome DevTools',
        url: '',
        img: devTools
      },
      {
        name: 'Google PageSpeed',
        url: 'https://developers.google.com/speed/pagespeed',
        img: pageSpeed
      },
      {
        name: 'Google Chrome Lighthouse',
        url: 'https://github.com/GoogleChrome/lighthouse',
        img: lighthouse
      },
      {
        name: 'Other tools',
        url: 'https://www.pingdom.com, https://gtmetrix.com',
        img: pingdom
      }
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return (
        <div style={dev} key={index}>
          <img width="100px" src={item.img} alt={item.name} />
          <span style={title}>
            <div>
              <span style={name}>{item.name}</span>
              <Url style={twitter}>{item.url}</Url>
            </div>
          </span>
        </div>
      );
    });

    return (
      <div style={devs}>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default Slide13;
