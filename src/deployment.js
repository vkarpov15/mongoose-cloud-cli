'use strict';

const axios = require('axios');
const prettyjson = require('prettyjson');

const url = 'http://api.mongoosecloud.io/api';
const authorization = process.env.API_KEY;

module.exports = async function deployment(deploymentId) {
  const opts = { headers: { authorization } };
  const { deployment, logs } = await axios.get(`${url}/deployment/${deploymentId}`, opts).
    then(res => res.data);
  
  console.log(prettyjson.render({ ...deployment, logs }));
};