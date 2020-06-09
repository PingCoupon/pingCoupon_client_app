import React from 'react';

import AppStack from './src/component';
import {Provider} from 'react-redux';
import {store} from './src/data/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
