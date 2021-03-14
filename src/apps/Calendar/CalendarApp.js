import React from 'react';
import { Provider } from 'react-redux';
import FloatLink from '../Portfolio/components/ui/FloatLink';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';
import './styles/styles.css';

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <FloatLink />
    </Provider>
  );
};

export default CalendarApp;
