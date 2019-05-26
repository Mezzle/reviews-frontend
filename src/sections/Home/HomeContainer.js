/*
 * Copyright (c) 2018 - 2019 Martin Meredith <martin@sourceguru.net>
 */

import React from "react";
import Home from "./components/Home";
import { restaurantSelector } from "./services/home.selectors";
import { load } from "./services/home.duck";
import { connect } from "react-redux";

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}

const mapStateToProps = state => ({
  restaurants: restaurantSelector(state)
});

const mapDispatchToProps = { load };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
