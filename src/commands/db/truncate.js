exports.command = 'truncate [name]';
exports.desc = 'Truncate a database';
exports.builder = function(yargs) {
  return yargs
      .positional('name', {
        'describe': 'The name of the database.',
        'default': 'default',
      });
};
exports.handler = function(argv) {

};
