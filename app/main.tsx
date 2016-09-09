import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import Dashboard from './components/Dashboard';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
