const CliTest = require('command-line-test');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

// eslint-disable max-len

describe('test', () => {
  it('start an example test', async () => {
    const cli = new CliTest();
    const resp = await cli.exec('node ./bin/fin.js help test');
    (resp.stdout).should.equal('test');
  });
});
