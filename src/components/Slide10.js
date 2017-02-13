import React from 'react';
import styled from 'styled-components';

import addyImg from '../data/images/addy.jpg';
import ilyaImg from '../data/images/ilya.jpeg';
import paulImg from '../data/images/paul.webp';

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
        <Dev key={index}>
          <Img src={item.img} alt={item.name} />
          <Title>
            <Name>{item.name}</Name>
            <WhoIs>{item.whois}</WhoIs>
            <Twitter>{item.twitter}</Twitter>
          </Title>
        </Dev>
      );
    });

    return (
      <Devs>
        <div>
          {list}
        </div>
      </Devs>
    );
  }
}

export default Slide10;

const Devs = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

const Dev = styled.div`
  display: flex;
  justifyContent: flex-start;
  alignItems: center;
  padding: 10px;
`;

const Title = styled.span`
  paddingLeft: 20px;
`;

const Name = styled.span`
  fontSize: 24px;
  fontSeight: bold;
`;

const Img = styled.img`
  width: 180px;
  borderRadius: 100%;
`;

const WhoIs = styled.span`
  color: #576267;
  fontSize: 16px;
  paddingLeft: 10px;
`;

const Twitter = styled.span`
  color: #1da1f2;
  fontSize: 16px;
`;
