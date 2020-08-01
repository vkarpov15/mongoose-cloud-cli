'use strict';

const chalk = require('chalk');
const firebase = require('./services/firebase');
const { prompt } = require('enquirer');
const store = require('./services/store');

module.exports = async function login() {
  const { email, password } = await prompt([{
    type: 'input',
    name: 'email',
    message: 'Email:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Password:'
  }]);

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(chalk.red('Login failed: ') + err.message);
    process.exit(-1);
  }

  const token = await firebase.auth().currentUser.getIdToken();
  store.set({ token });
  console.log(chalk.green('Logged in successfully!'));
};