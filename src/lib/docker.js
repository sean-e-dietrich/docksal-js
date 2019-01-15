const dockerRode = require('simple-dockerode');
const osenv = require('osenv');
const fs = require('fs');
const file = fs.createWriteStream('./big.file');

module.exports = (env) => {

  const dockerNative = {
    socketPath: '/var/run/docker.sock'
  };

  const boot2Docker = {
    protocol: 'https',
    host: '192.168.64.100',
    port: 2376,
    ca: fs.readFileSync(osenv.home() + '/.docker/machine/certs/ca.pem'),
    cert: fs.readFileSync(osenv.home() + '/.docker/machine/certs/cert.pem'),
    key: fs.readFileSync(osenv.home() + '/.docker/machine/certs/key.pem'),
    version: 'v1.38'
  };

  const docker = new dockerRode(boot2Docker);

  const dockerCmds = {};

  dockerCmds.start = (container, cb = () => {}) => {
    const dockerContainer = docker.getContainer(container);
    dockerContainer.start(function(err, data){
      cb();
    });
  };

  dockerCmds.exec = (container, cmd, opt = {}, cb = () => {}) => {
    const dockerContainer = docker.getContainer(container);
    // Simple to grab the stdout and stderr.
    const createOpts = {
      "User": "docker",
      "Tty": true
    };
    dockerContainer.exec(['bash', '-lc', cmd], {stdout: true, createOpts: createOpts}, (err, results) => {
      console.log(results.stdout);
    });
    // opt['User'] = 'docker';
    // //opt['Tty'] = false;
    // //opt['Interactive'] = true;
    // //opt["AttachStdin"] = true;
    // opt["AttachStdout"] = true;
    // //opt["AttachStderr"] = true;
    // opt['Cmd'] = ['bash', '-lc', cmd];
    // opt['Env'] = [
    //   "COLUMNS",
    //   "LINES",
    // ];
    // dockerContainer.exec(opt, function(err, exec){
    //   exec.start( {stdout: true}, ( err, stream ) => {
    //
    //     if ( err ) {
    //       return;
    //     }
    //
    //     stream.on( 'end', () => {
    //       cb();
    //     });
    //
    //     stream.on( 'error', (error) => {
    //       console.error(error);
    //     });
    //
    //     stream.pipe(file);
    //     stream.pipe( process.stdout );
    //   });
    // });
  };

  dockerCmds.run = (container, cmd, opt = {}, cb = () => {}) => {

  };

  dockerCmds.stop = (container, cb = () => {}) => {

  };

  dockerCmds.listContainers = async (all = false) => {
    return await docker.listContainers({
      'all': all,
      'filters': {"label": ["io.docksal.project-root"]}
    });
  };

  return dockerCmds;
};
