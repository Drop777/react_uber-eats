import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadData } from '../../Store/actions';
import { selectRestaurantsList } from '../../Store/selectors';

const mapStateToProps = state => ({
  restaurantsListData: selectRestaurantsList(state),
});

const mapDispatchToProps = {
  loadData,
};

const connectedRestourantsListPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);

export {
  connectedRestourantsListPage as RestaurantsListPage,
};
