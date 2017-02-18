import React from 'react';
import styled from 'styled-components';

import addyImg from '../data/images/addy.jpg';
import ilyaImg from '../data/images/ilya.jpeg';
import paulImg from '../data/images/paul.webp';

export const devs = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const dev = {
  display: 'flex',
  justifyContent: 'flexStart',
  alignItems: 'center',
  padding: '20px'
};

export const title = {
  paddingLeft: '20px'
};

export const name = {
  fontSize: '26px',
  fontSeight: 'bold'
};

export const imgStyle = {
  width: '150px',
  borderRadius: '100%'
};

export const whoIs = {
  color: '#576267',
  fontSize: '16px',
  marginTop: '10px'
};

export const twitter = {
  color: '#1da1f2',
  fontSize: '16px',
  paddingLeft: '10px'
};

const Title = styled.span`
  @media (max-width: 720px) {
    display: none;
  }
`;

class Slide14 extends React.Component {
  state = {
    headline: 'Tools',
    description: [
      {
        img: ilyaImg,
        name: 'Ilya Grigorik',
        whois: 'Google Developer Advocate and Web Perf Guru.',
        twitter: '@igrigorik'
      },
      {
        img: paulImg,
        name: 'Paul Lewis',
        whois: 'Google Design and Perf Advocate.',
        twitter: '@aerotwist'
      },
      {
        img: addyImg,
        name: 'Addy Osmani',
        whois: 'Work on Google Chrome, proggresive web app guru.',
        twitter: '@addyosmani'
      }
    ]
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return (
        <div style={dev} key={index}>
          <img style={imgStyle} src={item.img} alt={item.name} />
          <Title style={title}>
            <div>
              <span style={name}>{item.name}</span>
              <span style={twitter}>{item.twitter}</span>
            </div>
            <p style={whoIs}>{item.whois}</p>
          </Title>
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

export default Slide14;
