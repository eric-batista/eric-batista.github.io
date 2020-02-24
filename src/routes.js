import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import About from './pages/About/index';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/eric" exact component={Home} />
      <Route path="/eric/about" component={About} />
    </BrowserRouter>
  );
}