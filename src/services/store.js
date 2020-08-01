'use strict';

const Configstore = require('configstore');

const store = new Configstore('mongoose-cloud-cli');

module.exports = store;