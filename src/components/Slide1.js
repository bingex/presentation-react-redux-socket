import React from 'react';
import styled from 'styled-components';

import mainImg from '../data/images/main.png';
import introImg from '../data/images/introduction.jpg';

const Block = styled.div`
  width: 90%;
  maxWidth: 700px;
  textAlign: center;
`;

const wrapper = {
  height: '100vh',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${mainImg})`,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
};

const Img = styled.img`
  padding: 0;
  width: 300px;

  @media (max-width: 720px) {
    width: 150px;
  }
`;

class Slide1 extends React.Component {
  render() {
    return (
      <div style={wrapper}>
        <Block>
          <h1 style={{ color: '#ffffff' }}>Webpage perfomance optimization</h1>
          <Img src={introImg} alt="Turtle and rocket" />
        </Block>
      </div>
    );
  }
}

export default Slide1;
