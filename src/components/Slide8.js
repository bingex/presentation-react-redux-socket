import React from 'react';
import styled from 'styled-components';

import vectorZoom from '../data/images/vector-zoom.png';
import rasterZoom from '../data/images/raster-zoom.png';
import pngquantOrig from '../data/images/pngquant-original.png';
import pngquantOpt from '../data/images/pngquant-opt.png';

const Figure = styled.figure`
  margin: 0;

  @media (max-width: 720px) {
    display: none;
  }
`;

const Figcaption = styled.figcaption`
  textAlign: center;
  paddingTop: 10px;
`;

class Slide8 extends React.Component {
  state = {
    headline: 'Optimizing images 1.2',
    title: 'Image optimization is both an art and a science.'
  };

  render() {
    return (
      <div className="slide">
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper" style={{ justifyContent: 'space-around', color: '#576267' }}>
          <div style={{ display: 'flex' }}>
            <Figure>
              <img width="200px" src={vectorZoom} alt="Vector sample" />
              <Figcaption>
                Vector image
              </Figcaption>
            </Figure>

            <Figure>
              <img width="205px" src={rasterZoom} alt="Raster sample" />
              <Figcaption>
                Raster image
              </Figcaption>
            </Figure>
          </div>

          <div style={{ display: 'flex' }}>
            <Figure>
              <img src={pngquantOrig} alt="Original sample" />
              <Figcaption>
                Original PNG: <strong>75,628</strong> bytes
              </Figcaption>
            </Figure>

            <Figure>
              <img src={pngquantOpt} alt="Optimizing sample" />
              <Figcaption>
                pngquant:{' '}
                <strong>19,996</strong>
                {' '}bytes (
                <strong>73%</strong>
                {' '}smaller)
              </Figcaption>
            </Figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide8;
