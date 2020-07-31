'use strict';

const chalk = require('chalk');
const deployment = require('./src/deployment');
const server = require('./server');
const yargs = require('yargs');

yargs.command(
  'server [port]',
  'Start a server listening on the given port',
  yargs => {
    yargs.positional('port', { describe: 'port to use', default: 3000 });
  },
  argv => {
    server(argv.port);
  });

yargs.command(
  'deployment [deploymentId]',
  'Get info about the given deployment id, including build logs',
  yargs => {
    yargs.positional('deploymentId', { describe: 'The deployment id' });
  },
  argv => {
    deployment(argv.deploymentId).catch(err => {
      console.log(chalk.red(`Failed to get deployment info: ${err.message}`));
    });
  });

yargs.argv;