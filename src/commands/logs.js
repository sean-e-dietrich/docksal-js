exports.command = 'logs [service]';
exports.desc = 'Show service logs (e.g., Apache logs, MySQL logs) and Unison logs (fin help logs)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'no-color': {
          'description': 'Produce monochrome output.',
          'type': 'boolean',
        },
        'follow': {
          'alias': 'f',
          'description': 'Follow log output.',
          'type': 'boolean',
        },
        'timestamps': {
          'alias': 't',
          'description': 'Show timestamps.',
          'type': 'boolean',
        },
        'tail': {
          'description': 'Number of lines to show from the end of the logs for each container.',
          'default': 'all',
        },
      });
};
exports.handler = function(argv) {};
