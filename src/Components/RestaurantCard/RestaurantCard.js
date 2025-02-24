import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

export const RestaurantsCard = ({
  imageUrl,
  title,
  categories,
  etaRange,
  // For future
  // uuid,
}) => (
  <div className="restaurant-card">
    <img src={imageUrl} alt={title} className="restaurant-card__img" />
    <h2 className="restaurant-card__title">{title}</h2>
    <div className="restaurant-card__categories">
      {categories.join(' • ')}
    </div>
    <div className="restaurant-card__eta">
      {etaRange}
    </div>
  </div>
);

RestaurantsCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // For future
  // uuid: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
};

RestaurantsCard.defaultProps = {
  categories: [],
  etaRange: '',
};
