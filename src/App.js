import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TransitionMotion, spring } from 'react-motion';

import LoginComponent from './components/LoginComponent';
import SlidesComponent from './components/SlidesComponent';
import SingleSlideComponent from './components/SingleSlideComponent';

class App extends Component {
  render() {
    const styles = {};

    styles.fill = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };

    styles.content = {
      ...styles.fill,
      top: '40px',
      textAlign: 'center'
    };

    styles.nav = {
      padding: 0,
      margin: 0,
      position: 'absolute',
      top: 0,
      height: '40px',
      width: '100%',
      display: 'flex'
    };

    styles.navItem = {
      textAlign: 'center',
      flex: 1,
      listStyleType: 'none',
      padding: '10px'
    };

    styles.hsl = {
      ...styles.fill,
      color: 'white',
      paddingTop: '20px',
      fontSize: '30px'
    };

    const FadeRoute = ({ component: Component, ...rest }) => {
      const willLeave = () => ({
        zIndex: 1,
        opacity: spring(0)
        // transform: `translateX( ${spring(100)}px )`
      });

      return (
        <Route
          {...rest}
          children={({ location, match }) => (
            <TransitionMotion
              willLeave={willLeave}
              styles={
                match
                  ? [
                      {
                        key: location.pathname,
                        style: { opacity: 1 },
                        data: match
                      }
                    ]
                  : []
              }
            >
              {interpolatedStyles => (
                <div>
                  {interpolatedStyles.map(config => (
                    <div key={config.key} style={{ ...styles.fill, ...config.style }}>
                      <Component {...config.data} />
                    </div>
                  ))}
                </div>
              )}
            </TransitionMotion>
          )}
        />
      );
    };

    return (
      <div>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/slides" component={SlidesComponent} />
        <FadeRoute path="/slides/:id" component={SingleSlideComponent} />
      </div>
    );
  }
}

export default App;
