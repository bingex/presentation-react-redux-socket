import React from 'react';
import styled from 'styled-components';

import cssNano from '../data/images/css-nano.svg';
import uglifyJs from '../data/images/uglifyjs.png';
import gzip from '../data/images/gzip.png';

const wrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const ImgWrapper = styled.div`
  display: flex;
  alignItems: center;

  @media (max-width: 720px) {
    display: none;
  }
`;

const Percentage = styled.div`
  fontSize: 24px;
  backgroundColor: #3367D6;
  borderRadius: 100%;
  color: #ffffff;
  width: 70px;
  height: 70px;
  display: flex;
  justifyContent: center;
  alignItems: center;
  position: absolute;
`;

class Slide5 extends React.Component {
  state = {
    headline: 'Optimizing resources 1.1',
    title: 'The best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources.',
    description: ['Minify your code.', 'Uglify your code.', 'Use GZIP.']
  };

  render() {
    const list = this.state.description.map((item, index) => {
      return <li className="description" key={index}>{item}</li>;
    });

    return (
      <div className="slide">
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper">
          <div className="sub-wrapper">
            <p className="title">{this.state.title}</p>

            <div style={wrapper}>
              <ul>{list}</ul>
              <ImgWrapper>
                <div style={{ position: 'relative' }}>
                  <img width="200px" src={cssNano} alt="css nano" />
                  <Percentage style={{ right: '30px', top: '-20px' }}>40%</Percentage>
                </div>
                <div style={{ position: 'relative' }}>
                  <img width="200px" src={uglifyJs} alt="uglify js" />
                  <Percentage style={{ right: '-20px', top: '-30px' }}>35%</Percentage>
                </div>
                <div style={{ position: 'relative', padding: '0 15px' }}>
                  <img width="150px" src={gzip} alt="gzip" />
                  <Percentage style={{ right: '10px', top: '-20px' }}>80%</Percentage>
                </div>
              </ImgWrapper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide5;
