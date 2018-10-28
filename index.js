#!/usr/bin/env node

const program = require('commander');
const { description, version } = require('./package.json');

program
  .version(version)
  .description(description)
  .command('start [name]', 'start the opsdash server')
  .command('stop [name]', 'stop the opsdash server');

program.parse(process.argv);
