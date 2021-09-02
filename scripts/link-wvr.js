#!/usr/bin/env node

const fs = require('fs-extra');
const shell = require('shelljs')
const angularCli = require('@angular/cli');
const elementsPath = 'dist/tl-elements';

shell
  .exec('npm link @wvr/elements');

shell
  .cd('projects/tl-elements')
  .exec('npm link @wvr/elements');

angularCli.default({
  cliArgs: ['b'],
  inputStream: process.stdin,
  outputStream: process.stdout
}).then(c => {
  shell.exit();
});
