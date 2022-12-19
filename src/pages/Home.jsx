import React from 'react';
import Directory from '../components/directory';
import data from '../data.json';

const Home = () => {
  return (
    <>
      <Directory data={data} />
    </>
  );
};

export default Home;
