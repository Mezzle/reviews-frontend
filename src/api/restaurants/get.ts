/*
 * Copyright (c) 2018 Martin Meredith <martin@sourceguru.net>
 */

import axios from 'axios';
import * as config from '../config';

export const get = () =>
  axios.get(`${config.apiUrl}/restaurant`).then(response => response.data);
