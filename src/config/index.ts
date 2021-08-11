/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import middleware from './middleware';
import envVars from './env-vars';
// const database = require("./database");
import database from './database';

export default {
  middleware,
  envVars,
  database,
};
