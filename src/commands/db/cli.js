exports.command = 'cli [query]';
exports.desc = 'Open command line interface to the DB server (and execute query if provided).';
exports.builder = function(yargs) {
  return yargs
      .positional('query', {
        'describe': 'The query to run.',
        'type': 'string',
        'required': false,
      });
};

exports.handler = function(argv) {

};
