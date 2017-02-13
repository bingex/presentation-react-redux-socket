import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Login from './components/Login';
import Slides from './components/Slides';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/slides" component={Slides} />
    <Route path="/slides/1" component={Slide1} />
    <Route path="/slides/2" component={Slide2} />
    <Route path="/slides/3" component={Slide3} />
    <Route path="/slides/4" component={Slide4} />
    <Route path="/slides/5" component={Slide5} />
    <Route path="/slides/6" component={Slide6} />
    <Route path="/slides/7" component={Slide7} />
    <Route path="/slides/8" component={Slide8} />
    <Route path="/slides/9" component={Slide9} />
    <Route path="/slides/10" component={Slide10} />
  </Route>
);
