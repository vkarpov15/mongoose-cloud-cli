'use strict';

const axios = require('axios');
const chalk = require('chalk');
const pick = require('lodash.pick');
const prettyjson = require('prettyjson');
const store = require('./services/store');

const url = 'http://api.mongoosecloud.io/api';
const deploymentProps = [
  'organizationName',
  'repoName',
  'branch',
  'createdAt',
  'status',
  'urls',
  'mongodb'
];

module.exports = async function deployment(deploymentId) {
  const authorization = store.get('token');
  if (!authorization) {
    console.log(chalk.red(`Must be logged in first, run "mongoose-cloud login"`));
    process.exit(-1);
  }

  const opts = { headers: { authorization } };
  const { deployment, logs } = await axios.get(`${url}/deployment/${deploymentId}`, opts).
    then(res => res.data);
  
  console.log(prettyjson.render({ ...pick(deployment, deploymentProps), logs }));
};