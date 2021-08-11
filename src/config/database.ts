/* eslint-disable import/extensions */
import { connect } from 'mongoose';
import debug from 'debug';
import envVars from './env-vars';

debug('arrive:server');
const { databaseUrl } = envVars;
console.log({ databaseUrl });

const databaseConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  connectTimeoutMS: 30000,
  useUnifiedTopology: true,
  retryWrites: false,
};

/**
 * The connect function is initiates a connection to the database.
 * If the connection is unsuccessful or throws an error, the app is exited.
 * @return void
 */
const connection = async (): Promise<void> => {
  try {
    await connect(databaseUrl, databaseConnectionOptions);
    console.log('succesful');

    debug('Database connection successful');
  } catch (e) {
    // If an error occurs, exit app process
    console.log(e);

    debug('Database connection failed with error', e);
    process.exit(1);
  }
};

export default connection;
