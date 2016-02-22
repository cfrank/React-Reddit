import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from './Components/Index';
import Home from './Components/Home/Home';
import Info from './Components/Info';
import Gateway from './Components/Gateway';
import AuthenticatedArea from './Components/AuthenticatedArea';
import Application from './Components/Application';
import Front from './Components/Front/Front';
import Logout from './Components/Logout/Logout';

const mountNode = document.getElementById('react-root');

render((
    <Router history={browserHistory}>
      {/* Home page */}
      <Route path="/" component={Index}>
        <IndexRoute component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/gateway" component={Gateway} />
      </Route>
      {/* Authenticated Routes*/}
      <Route path="/app" component={Application}>
        <IndexRoute component={Front} />
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
), mountNode)
