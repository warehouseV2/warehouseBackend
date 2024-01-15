import {juggler} from '@loopback/repository';
require('dotenv').config();


export const dbConfig = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

export const datasource = new juggler.DataSource(dbConfig);
