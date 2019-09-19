import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './Header';
import NotFound from './NotFound';
import Home from './Home';

class WrapperComponent extends Component {
  render() {
    return (
      <div className='Wrapper'>
        <Router>
          <Header />
          <div className='PageContent'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default WrapperComponent;
