import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Shop from './pages/Shop';
import SignIn from './pages/SignIn';
import Header from './components/header/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
