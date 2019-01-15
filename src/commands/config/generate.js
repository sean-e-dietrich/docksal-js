exports.command = 'generate';
exports.desc = 'Generate empty Docksal configuration for the project';
exports.builder = function(yargs) {
  return yargs
      .options({
        'stack': {
          'default': 'default',
        },
        'docroot': {
          'docroot': 'docroot',
        },
      });
};
exports.handler = function(argv) {};
