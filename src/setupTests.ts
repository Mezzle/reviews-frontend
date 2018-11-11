/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
