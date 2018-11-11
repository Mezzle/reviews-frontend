/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Restaurant } from '../../models/Restaurant';
import Home from './components/Home';
import { HomeContainerProps } from './HomeContainer.props';
import { load } from './services/home.duck';
import { restaurantSelector } from './services/home.selectors';

export class HomeContainer extends React.Component<HomeContainerProps> {
  constructor(props: HomeContainerProps) {
    super(props);

    props.load();
  }

  public render() {
    return <Home restaurants={this.props.restaurants} />;
  }
}

interface StateFromProps {
  restaurants: Restaurant[];
}

interface DispatchFromProps {
  load?: () => void;
}

const mapStateToProps = (state: any): StateFromProps => ({
  restaurants: restaurantSelector(state)
});

const mapDispatchToProps: DispatchFromProps = {
  load
};

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
