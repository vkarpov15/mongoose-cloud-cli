'use strict';

const axios = require('axios');
const pick = require('lodash.pick');
const prettyjson = require('prettyjson');

const url = 'http://api.mongoosecloud.io/api';
const authorization = process.env.API_KEY;
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
  const opts = { headers: { authorization } };
  const { deployment, logs } = await axios.get(`${url}/deployment/${deploymentId}`, opts).
    then(res => res.data);
  
  console.log(prettyjson.render({ ...pick(deployment, deploymentProps), logs }));
};