import React from 'react';
import styled from 'styled-components';

import UserImg from '../data/images/happy-user.png';

class Slide2 extends React.Component {
  state = {
    headline: 'Perfomance goal 1.2',
    title: 'Our goal is to ultimately make users happy. Focus on user.',
    description: [
      "Deliver interactive content in under 1 second. If you don't, user attention wanders, and their perception of dealing with the task is broken.",
      'You have 100ms to respond to user input before they notice a lag. This applies to most inputs, such as clicking buttons, toggling form controls, or starting animations.',
      'For actions that take longer than 500ms to complete, always provide feedback.'
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

            <Img src={UserImg} alt="Happy user" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slide2;

const Img = styled.img`
  paddingTop: 20px;
  display: flex;
  margin: auto;
  width: 20vh;

  @media (max-width: 520px) {
    display: none;
  }
`;
