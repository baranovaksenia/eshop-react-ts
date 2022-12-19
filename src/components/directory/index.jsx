import React from 'react';
import CategoryItem from '../category-item';
import './directory.scss';
const Directory = ({ data }) => {
  return (
    <div className="directory-container">
      {data.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
