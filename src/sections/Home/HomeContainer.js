/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import React from 'react';
import Home from './components/Home';
import { restaurantSelector } from './services/home.selectors';
import { load } from './services/home.duck';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    props.load();
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => ({
  restaurants: restaurantSelector(state)
});

const mapDispatchToProps = { load };

HomeContainer.propTypes = {
  load: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object)
};

HomeContainer.defaultProps = {
  restaurants: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
