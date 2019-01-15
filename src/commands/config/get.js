exports.command = 'get [var]';
exports.desc = 'Get the value of the single variable from project ENV file.';
exports.builder = function(yargs) {
  return yargs
      .options({
        'global': {
          'description': ' Get value from global ENV file',
          'default': false,
          'type': 'boolean',
        },
        'env': {
          'description': 'Get value from environment specific project ENV file',
          'default': '',
          'type': 'string',
        },
      });
};
exports.handler = function(argv) {};
