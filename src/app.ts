/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('dotenv').config();
// const { middleware, database } = require("./config");
import express from 'express';
import config from './config';
import { hobbiesRoute, usersRoute } from './routes/index';

const { middleware, database } = config;

const app = express();

// Attempt database connection

export const appCore = () => {
  database();

  app.use(middleware);

  app.use('/v1', hobbiesRoute);
  app.use('/v1', usersRoute);

  // Health Check Endpoint
  app.use('/', (req, res) => res.send('Ok'));

  return app;
};
