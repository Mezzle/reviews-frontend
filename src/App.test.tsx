import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

describe('Main app', () => {
  it('renders consistently', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
