import React from 'react';
import styled from 'styled-components';

const wrapper = {
  maxWidth: '1000px',
  width: '90%',
  padding: '0',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: '100vh'
};

const SingleSlide = styled.div`
  margin: 10px;
  height: auto;
  width: auto;
  background: #42b983;
  display: flex;
  justifyContent: center;
  alignItems: center;
  color: #ffffff;
  padding: 20px;
  cursor: pointer;
  borderRadius: 2px;
  fontSize: 18px;

  @media (max-width: 720px) {
    padding: 2px;
    margin: 2px;
  }
`;

class Slides extends React.Component {
  state = {
    slides: [
      {
        path: '/slides/1',
        name: 'Start',
        id: 1
      },
      {
        path: '/slides/2',
        name: 'Perfomance goal 1.1',
        id: 2
      },
      {
        path: '/slides/3',
        name: 'Perfomance goal 1.2',
        id: 4
      },
      {
        path: '/slides/4',
        name: 'Eliminating unnecessary downloads',
        id: 4
      },
      {
        path: '/slides/5',
        name: 'Optimizing resources 1.1',
        id: 5
      },
      {
        path: '/slides/6',
        name: 'Optimizing resources 1.2',
        id: 6
      },
      {
        path: '/slides/7',
        name: 'Optimizing images 1.1',
        id: 7
      },
      {
        path: '/slides/8',
        name: 'Optimizing images 1.2',
        id: 8
      },
      {
        path: '/slides/9',
        name: 'Optimizing css',
        id: 9
      },
      {
        path: '/slides/10',
        name: 'JavaScript optimization 1.1',
        id: 10
      },
      {
        path: '/slides/11',
        name: 'JavaScript optimization 1.2',
        id: 11
      },
      {
        path: '/slides/12',
        name: 'Rendering perfomance',
        id: 12
      },
      {
        path: '/slides/13',
        name: 'Tools',
        id: 13
      },
      {
        path: '/slides/14',
        name: 'Developers',
        id: 14
      },
      {
        path: '/slides/15',
        name: 'Thank you',
        id: 15
      }
    ]
  };

  goSlide = id => {
    this.context.router.push(`/slides/${id}`);
  };

  render() {
    const list = this.state.slides.map((item, index) => {
      return (
        <SingleSlide key={index} onClick={() => this.goSlide(item.id)}>
          {index + 1}. {item.name}
        </SingleSlide>
      );
    });

    return (
      <div style={wrapper}>
        {list}
      </div>
    );
  }
}

Slides.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Slides;
