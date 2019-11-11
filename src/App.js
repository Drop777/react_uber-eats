import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import { RestaurantsListPage } from './Components/RestaurantsListPage';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
