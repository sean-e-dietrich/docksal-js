exports.command = 'set [var]';
exports.desc = 'Set value(s) for the variable(s) in project ENV file';
exports.builder = function(yargs) {
  return yargs
      .options({
        'global': {
          'description': 'Set for global ENV file',
          'default': false,
          'type': 'boolean',
        },
        'env': {
          'description': 'Set in environment specific project ENV file',
          'default': '',
          'type': 'string',
        },
      });
};
exports.handler = function(argv) {};
