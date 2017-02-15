import React from 'react';

const wrapper = {
  maxWidth: '1000px',
  width: '90%',
  padding: '50px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

const singleSlide = {
  margin: '20px',
  height: '100px',
  width: '250px',
  background: '#42b983',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  padding: '20px',
  cursor: 'pointer',
  borderRadius: '2px',
  fontSize: '18px'
};

class Slides extends React.Component {
  state = {
    slides: [
      {
        path: '/slides/1',
        name: 'Perfomance goal 1.1',
        id: 1
      },
      {
        path: '/slides/2',
        name: 'Perfomance goal 1.2',
        id: 2
      },
      {
        path: '/slides/3',
        name: 'Eliminating unnecessary downloads',
        id: 3
      },
      {
        path: '/slides/4',
        name: 'Optimizing resources',
        id: 4
      },
      {
        path: '/slides/5',
        name: 'Optimizing images',
        id: 5
      },
      {
        path: '/slides/6',
        name: 'Optimizing css',
        id: 6
      },
      {
        path: '/slides/7',
        name: 'JavaScript optimization',
        id: 7
      },
      {
        path: '/slides/8',
        name: 'Rendering perfomance',
        id: 8
      },
      {
        path: '/slides/9',
        name: 'Tools',
        id: 9
      },
      {
        path: '/slides/10',
        name: 'Developers',
        id: 10
      }
    ]
  };

  goSlide = id => {
    this.context.router.push(`/slides/${id}`);
  };

  render() {
    const list = this.state.slides.map((item, index) => {
      return (
        <div style={singleSlide} key={index} onClick={() => this.goSlide(item.id)}>
          {index + 1}. {item.name}
        </div>
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
