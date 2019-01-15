const dockerRode = require('dockerode');

module.exports = (env) => {

  const docker = new dockerRode(env.DOCKER_CONNECTION);

  const dockerCmds = {};

  dockerCmds.start = (container, cb = () => {}) => {
    const dockerContainer = docker.getContainer(container);
    dockerContainer.start(function(err, data){
      cb();
    });
  };

  dockerCmds.exec = (container, cmd, opt = {}, cb = () => {}) => {
    const dockerContainer = docker.getContainer(container);
    opt['Cmd'] = cmd;
    dockerContainer.exec(opts, function(err, data){

    });
  };

  dockerCmds.run = (container, cmd, opt = {}, cb = () => {}) => {

  };

  dockerCmds.stop = (container, cb = () => {}) => {

  };

  return dockerCmds;
};
