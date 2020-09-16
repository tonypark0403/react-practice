import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './search/container/Search';
import User from './user/container/User';

import 'antd/dist/antd.css';

export default function App() {
  useEffect(() => {
    const bodyEl = document.querySelector('body');
    const loadingEl = document.querySelector('#init-loading');
    bodyEl.removeChild(loadingEl);
  }, []);
  return (
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path='/user/:name' component={User} />
    </Switch>
  );
}
