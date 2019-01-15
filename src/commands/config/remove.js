exports.command = 'remove [var]';
exports.aliases = ['rm'];
exports.desc = 'Remove variable(s) from project ENV file';
exports.builder = function(yargs) {
  return yargs
      .options({
        'global': {
          'description': 'Remove from global ENV file',
          'default': false,
          'type': 'boolean',
        },
        'env': {
          'description': 'Remove from environment specific project ENV file',
          'default': '',
          'type': 'string',
        },
      });
};
exports.handler = function(argv) {};
