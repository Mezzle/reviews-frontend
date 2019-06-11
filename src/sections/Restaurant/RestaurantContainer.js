/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from './services/restaurant.duck';
import Restaurant from './Restaurant';
import { restaurantSelector } from './services/restaurant.selectors';

class RestaurantContainer extends React.Component {
  constructor(props) {
    super(props);

    props.load();
  }

  render() {
    return <>{this.props.restaurant && <Restaurant {...this.props} />}</>;
  }
}

RestaurantContainer.propTypes = {
  load: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  restaurant: restaurantSelector(state)
});

const mapDispatchToProps = { load };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
