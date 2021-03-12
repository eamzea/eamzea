import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './routers/PrivateRoute';
import { PublicRoute } from './routers/PublicRoute';
import DashboardRoutes from './routers/DashboardRoutes';
import LoginScreen from './components/login/LoginScreen';

import 'bootstrap/dist/css/bootstrap.min.css';

const init = () => {
  return (
    JSON.parse(localStorage.getItem('user')) || {
      logged: false,
    }
  );
};

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <div style={{ width: '100vw' }}>
        <Switch>
          <PublicRoute
            exact
            path="/heroes/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/heroes"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default HeroesApp;
