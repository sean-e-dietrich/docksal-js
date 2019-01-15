exports.command = 'bash [service]';
exports.desc = 'Open shell into service\'s container. Defaults to cli';
exports.builder = function(yargs) {
  return yargs
      .positional('service', {
        'describe': 'Service to run command on',
        'default': 'cli',
      });
};
exports.handler = function(argv) {};
