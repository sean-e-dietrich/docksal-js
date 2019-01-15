const keygen = require('ssh-keygen');
const osenv = require('osenv');
const fs = require('fs-extra');

module.exports = function(env, docker) {

  const sshAgent = {};

  /**
   * Send All Commands
   * @param cmd
   */
  const sshAgentExec = (cmd, options = {}) => {
    docker.exec('docksal-ssh-agent', '', [

    ]);
  };

  sshAgent.addKey = (key = '') => {
    sshAgentExec('');
  };

  sshAgent.removeKeys = () => {
    sshAgentExec('');
  };

  sshAgent.listKeys = () => {
    sshAgentExec('');
  };

  /**
   *
   * @param name
   *   The Name of the Key
   * @param location
   *   The Location to put the Key. If none is provided put in $HOME/.ssh/
   */
  sshAgent.generate = (name, location = false) => {
    location = (location !== false) ? location + '/' + name : osenv.home() + '/.ssh/' + name;

    console.log('Generating a new 4096 bit RSA key...');
    keygen({
      location: location,
      read: true,
      size: 4096
    }, function(err, out){
      if(err) return console.log('Something went wrong: ' + err);
      console.log("Private key file: " + location);
      console.log("Public key file: " + location + ".pub");
      console.log('Contents of the public SSH key (copy and use this as an authorized key on a remote system):');
      console.log(out.pubKey);
    });
  };

  return sshAgent;

};
