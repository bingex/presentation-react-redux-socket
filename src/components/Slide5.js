import React from 'react';

class Slide5 extends React.Component {
  state = {
    headline: 'Optimizing images',
    title: 'Images often account for most of the downloaded bytes on a web page and also often occupy a significant amount of visual space.',
    description: [
      'Leverage CSS3 effects where possible',
      'Use web fonts instead of encoding text in images',
      'Prefer vector formats: vector images are resolution and scale independent, which makes them a perfect fit for the multi-device and high-resolution world.',
      'Minify and compress with GZIP SVG assets.',
      'Use raster image optimization tools (gifsicle - create and optimize GIF images, jpegtran - optimize jpeg images, optipng - lossless PNG optimization, pngquant - lossy PNG optimization). Experiment with it.',
      'Use responsive images.'
    ]
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

            <ul>{list}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide5;
