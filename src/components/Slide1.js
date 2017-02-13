import React from 'react';
import styled from 'styled-components';

import slideImg from '../data/images/clock.jpg';

class Slide1 extends React.Component {
  state = {
    headline: 'Perfomance goal 1.1',
    title: 'What is website performance goals? Is it to make your site perform fast? Is it to make your site perform fast on any specific device?'
  };

  render() {
    return (
      <WrapperSlide1>
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper">
          <TitleSlide1>{this.state.title}</TitleSlide1>
        </div>
      </WrapperSlide1>
    );
  }
}

export default Slide1;

const WrapperSlide1 = styled.div`
  height: 100vh;
  width: 100vw;
  backgroundSize: cover;
  backgroundRepeat: no-repeat;
  backgroundPosition: center;
  backgroundColor: rgba(0, 0, 0, 0.7);
  backgroundBlendMode: multiply;
  backgroundImage: url(${slideImg});
`;

const TitleSlide1 = styled.p`
  lineHeight: 1.4em;
  color: #ffffff;
  font-size: 30px;
  maxWidth: 850px;
  @media (max-width: 520px) {
    lineHeight: 1.4em;
    color: #ffffff;
    fontSize: 16px;
    maxWidth: 850px;
  }
`;
