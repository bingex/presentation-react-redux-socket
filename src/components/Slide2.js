import React from 'react';
import styled from 'styled-components';

import slideImg from '../data/images/clock.jpg';

const wrapper = {
  height: '100vh',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backgroundBlendMode: 'multiply',
  backgroundImage: `url(${slideImg})`
};

const Title = styled.div`
  lineHeight: 1em;
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

class Slide2 extends React.Component {
  state = {
    headline: 'Perfomance goal 1.1',
    title: [
      'What is website performance goals?',
      'Is it to make your site perform fast?',
      'Or make your site perform fast on any specific device?',
      'Something else?'
    ]
  };

  render() {
    return (
      <div style={wrapper}>
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper">
          <Title>
            {this.state.title.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </Title>
        </div>
      </div>
    );
  }
}

export default Slide2;
