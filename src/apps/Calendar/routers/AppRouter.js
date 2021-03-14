import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import LoadingScreen from '../components/ui/LoadingScreen';
import { PrivateRoutes } from './PrivateRoute';
import { PublicRoutes } from './PublicRoute';

const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div style={{ width: '100vw' }}>
        <Switch>
          <PublicRoutes
            path="/calendar/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />
          <PrivateRoutes
            exact
            path="/calendar"
            component={CalendarScreen}
            isAuthenticated={!!uid}
          />
          <Redirect to="/calendar/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
