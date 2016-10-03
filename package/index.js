#!/usr/bin/env node
'use strict';

const pkg = require('commander');
const generate = require('./generate')

const { name, version } = require('../package.json');


process.title = name;
process.bin = name;


pkg
.version(`ReRe version: ${version}`)
.usage("<command> <name> [options]");


pkg
.command('project <name>')
.description('generates new project boiler')
.action(name => generate('project', name));


pkg
.command('pure <name>')
.description('generates new pure component boiler')
.action(name => generate('pure', name));


pkg
.command('stateless <name>')
.description('generates new stateless component boiler')
.action(name => generate('stateless', name));


pkg
.command('logic <name>')
.description('generates new redux logic boiler')
.action(name => generate('logic', name));


pkg.on('*', () => pkg.help());
pkg.parse(process.argv);
