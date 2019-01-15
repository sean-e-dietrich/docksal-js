exports.command = 'show';
exports.desc = 'Display configuration for the current project';
exports.builder = function(yargs) {
  return yargs
      .options({
        'show-secrets': {
          'description': 'Do not truncate value of SECRET_* environment vars',
          'default': false,
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
