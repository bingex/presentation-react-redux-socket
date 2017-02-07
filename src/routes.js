
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginComponent from './components/LoginComponent';
import SlidesComponent from './components/SlidesComponent';
import SlideComponent from './components/SlideComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginComponent} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/slides" component={SlidesComponent} />
    <Route path="/slides/:id" component={SlideComponent} /> 
  </Route>
)