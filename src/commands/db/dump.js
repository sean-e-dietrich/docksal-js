exports.command = 'dump [file]';
exports.desc = 'Dump a database into an SQL dump file or stdout.';
exports.builder = function(yargs) {
  return yargs
      .positional('file', {
        'describe': 'The file to output database to.',
        'type': 'string',
      });
};
exports.handler = function(argv) {

};
