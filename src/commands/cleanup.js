exports.command = 'cleanup';
exports.desc = 'Remove unused Docker images and projects (saves disk space)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'hard': {
          'description': '???',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
