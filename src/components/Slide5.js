import React from 'react';
import styled from 'styled-components';

const Plugin = styled.span`
  color: #78838e; 
  padding: 0 25px;
`;

const Start = styled.span`
  padding: 0 20px;
  color: #d81b60;
`;

const Min = styled.span`
  padding: 0 20px;
  color: #34a853
`;

const Perc = styled.span`
  padding: 0 20px;
  fontSize: 4vh;
`;

class Slide5 extends React.Component {
  state = {
    headline: 'Optimizing resources 1.2'
  };

  render() {
    return (
      <div className="slide">
        <h4 className="headline">{this.state.headline}</h4>

        <div className="wrapper">
          <div className="sub-wrapper" style={{ fontSize: '3vh' }}>
            <p style={{ padding: '20px' }}>
              <Plugin>jquery-1.11.0.js</Plugin>
              <Start>276 KB</Start>
              <span>-</span>
              <span style={{ padding: '0 20px' }}>94 KB</span>
              <span>-</span>
              <Min>33 KB</Min>
              <Perc>70%</Perc>
            </p>

            <p style={{ padding: '20px' }}>
              <Plugin>angular-1.2.15.js</Plugin>
              <Start>729 KB</Start>
              <span>-</span>
              <span style={{ padding: '0 20px' }}>101 KB</span>
              <span>-</span>
              <Min>37 KB</Min>
              <Perc>75%</Perc>
            </p>

            <p style={{ padding: '20px' }}>
              <Plugin>bootstrap-3.1.1.css</Plugin>
              <Start>118 KB</Start>
              <span>-</span>
              <span style={{ padding: '0 20px' }}>98 KB</span>
              <span>-</span>
              <Min>17 KB</Min>
              <Perc>83%</Perc>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide5;
