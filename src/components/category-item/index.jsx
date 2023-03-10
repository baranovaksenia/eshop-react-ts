import React from 'react';
import './category-item.styles.scss';
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-container__body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
