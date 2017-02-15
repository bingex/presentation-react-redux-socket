import React from 'react';

import addyImg from '../data/images/addy.jpg';
import ilyaImg from '../data/images/ilya.jpeg';
import paulImg from '../data/images/paul.webp';

const devs = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const dev = {
  display: 'flex',
  justifyContent: 'flexStart',
  alignItems: 'center',
  padding: '10px'
}

const title = {
  paddingLeft: '20px'
}

const name = {
  fontSize: '24px',
  fontSeight: 'bold',
}

const imgStyle = {
  width: '180px',
  borderRadius: '100%'
}

const whoIs = {
  color: '#576267',
  fontSize: '16px',
  paddingLeft: '10px'
}

const twitter = {
  color: '#1da1f2',
  fontSize: '16px'
}

class Slide10 extends React.Component {
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
          <span style={title}>
            <span style={name}>{item.name}</span>
            <span style={whoIs}>{item.whois}</span>
            <span style={twitter}>{item.twitter}</span>
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

export default Slide10;
