/* eslint-disable */
const core = require('@actions/core');
const github = require('@actions/exec');
const exec = require('@actions/github');

function run() {
  core.notice('Heloo from my custom js actions');
}

run();
