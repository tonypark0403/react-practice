import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './search/container/Search';
import User from './user/container/User';

import 'antd/dist/antd.css';
import Login from './auth/container/Login';
import Signup from './auth/container/Signup';
import { useDispatch } from 'react-redux';

import { actions as authActions } from './auth/state';

export default function App() {
  useEffect(() => {
    const bodyEl = document.querySelector('body');
    const loadingEl = document.querySelector('#init-loading');
    bodyEl.removeChild(loadingEl);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path='/user/:name' component={User} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </Switch>
  );
}
