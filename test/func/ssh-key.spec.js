const CliTest = require('command-line-test');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const osenv = require('osenv');
const fs = require('fs-extra');
chai.use(require('chai-fs'));

// eslint-disable max-len

describe('ssh-key command test', () => {

  it('Add All Keys: ssh-key add', async () => {

  });

  it('Add Key: ssh-key add key-name', async () => {

  });

  it('List all keys: ssh-key ls', async () => {

  });

  it('Remove all keys: ssh-key rm', async () => {

  });

  it('Generate new key: ssh-key new test-run-key', async () => {
    const keyName = 'test-run-key';
    const keyLocation = osenv.home() + '/.ssh/' + keyName;

    if (fs.existsSync(keyLocation)){
      console.log("File Exists. Removing.");
      fs.unlinkSync(keyLocation);
    }

    const cli = new CliTest();
    const resp = await cli.exec('node ./bin/fin.js ssh-key new ' + keyName);
    expect(resp.stdout).to.include('Generating a new 4096 bit RSA key...');
    expect(resp.stdout).to.include('Private key file: ' + keyLocation);
    expect(resp.stdout).to.include('Contents of the public SSH key (copy and use this as an authorized key on a remote system):');
    expect(keyLocation + ".pub").to.be.a.file("SSH Key Exists");
  });
});
