import React from 'react';
import Directory from './components/directory';

import data from './data.json';

const App = () => {
  return (
    <>
      <Directory categories={data} />
    </>
  );
};

export default App;
