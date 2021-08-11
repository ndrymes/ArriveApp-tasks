
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('dotenv').config();
// const { middleware, database } = require("./config");
import express from 'express';
import config from './config';

const { middleware, database } = config;

const app = express();

// Attempt database connection

export const appCore = async () => {
  database();

  //  use midddleware
  app.use(middleware);


  // Health Check Endpoint
  app.use('/', (req, res) => res.send('Ok'));

  return app;
};
