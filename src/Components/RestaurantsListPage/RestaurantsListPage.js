import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantsCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadData } = this.props;

    loadData();
  }

  render() {
    const { restaurantsListData } = this.props;

    return (
      <div className="restaurants-list">
        {restaurantsListData.map((restaurant) => {
          const {
            uuid,
            title,
            heroImageUrl: imageUrl,
            categories,
            etaRange,
          } = restaurant;

          return (
            <RestaurantsCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageUrl={imageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            />
          );
        })}
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape({})),
  loadData: PropTypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
};
