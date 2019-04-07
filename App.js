import React from 'react';
import { Provider } from 'react-redux';
import Router from './src/navigation';
import initialStore from './src/store';

const store = initialStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
