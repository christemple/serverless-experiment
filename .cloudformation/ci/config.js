const fs = require('fs');

const Parameters = require('./parameters/parameters.json');
const CodePipeline = require('./pipeline')
const CodeBuild = require('./build')
const CloudformationRole = require('../CloudformationRole');

const config = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: "Service Pipeline",
  Parameters,
  Resources: {
    ...CodePipeline,
    ...CodeBuild,
    CloudformationRole
  }
};

fs.writeFileSync('.cloudformation/ci/config.json', JSON.stringify(config));