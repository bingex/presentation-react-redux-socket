import React from 'react';
import styled from 'styled-components';

const Plugin = styled.td`
  padding: 20px;
  background: #F8F8F8;
  color: #78838e; 
`;

const Start = styled.td`
  padding: 20px;
  background: #F8F8F8;
  color: #d81b60;
`;

const Min = styled.td`
  padding: 20px;
  background: #F8F8F8;
`;

const Gzip = styled.td`
  color: #34a853;
  padding: 20px;
  background: #F8F8F8;
`;

const Perc = styled.td`
  padding: 20px;
  background: #F8F8F8;
  fontSize: 4vh;
`;

const headRow = {
  padding: '15px 20px',
  fontWeight: 'normal'
};

const Table = styled.table`
  fontSize: 3vh;
  borderCollapse: collapse;

  @media (max-width: 720px) {
    display: none;
  }
`;

class Slide6 extends React.Component {
  state = {
    headline: 'Optimizing resources 1.2'
  };

  render() {
    return (
      <div className="slide">
        <h4 className="headline">{this.state.headline}</h4>
        <div className="wrapper">
          <Table>
            <thead>
              <tr
                style={{
                  background: '#757575',
                  border: '0',
                  color: '#ffffff',
                  padding: '10px',
                  fontSize: '2vh'
                }}
              >
                <th style={headRow}>file</th>
                <th style={headRow}>original</th>
                <th style={headRow}>minify</th>
                <th style={headRow}>gzip</th>
                <th style={headRow}>%</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <Plugin>jquery-1.11.0.js</Plugin>
                <Start>276 KB</Start>
                <Min>94 KB</Min>
                <Gzip>33 KB</Gzip>
                <Perc>70%</Perc>
              </tr>

              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <Plugin>angular-1.2.15.js</Plugin>
                <Start>729 KB</Start>
                <Min>101 KB</Min>
                <Gzip>37 KB</Gzip>
                <Perc>75%</Perc>
              </tr>

              <tr>
                <Plugin>bootstrap-3.1.1.css</Plugin>
                <Start>118 KB</Start>
                <Min>98 KB</Min>
                <Gzip>17 KB</Gzip>
                <Perc>83%</Perc>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Slide6;
