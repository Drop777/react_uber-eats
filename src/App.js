import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import { RestaurantsListPage } from './Components/RestaurantsListPage';
import { Header } from './Components/Header';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <main className="content">
        <RestaurantsListPage />
      </main>
      <footer>Uber Eats Footer</footer>
    </div>
  </Provider>
);

export default App;
