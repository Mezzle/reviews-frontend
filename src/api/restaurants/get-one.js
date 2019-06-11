/*
 * Copyright (c) 2019 Martin Meredith <martin@sourceguru.net>
 */

import axios from 'axios';
import * as config from '../config';

export const getOne = id =>
  axios
    .get(`${config.apiUrl}/restaurant/${id}`)
    .then(response => response.data);
