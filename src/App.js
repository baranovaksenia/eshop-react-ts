import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Directory from './components/directory';
import Header from './components/header/Header';

import data from './data.json';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Directory categories={data} />} />
      </Routes>
    </>
  );
};

export default App;
