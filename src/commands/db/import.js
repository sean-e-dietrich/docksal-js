exports.command = 'import [file]';
exports.desc = 'Truncate the database and import from SQL dump file or stdin.';
exports.builder = function(yargs) {
  return yargs
      .positional('file', {
        'describe': 'The file to import.',
        'type': 'string',
      })
      .options({
        'progress': {
          'describe': 'Show import progess (requires pv).',
          'type': 'boolean',
        },
        'no-truncate': {
          'describe': 'Do no truncate database before import.',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {
  console.log('init called for dir', argv.dir);
};
