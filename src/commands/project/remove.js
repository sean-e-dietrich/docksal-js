exports.command = 'remove [service]';
exports.aliases = ['rm'];
exports.desc = 'Remove all project services, networks and all their volumes, or specified services only';
exports.builder = function(yargs) {
  return yargs
      .options({
        'force': {
          'alias': 'f',
          'description': 'Do not ask for confirmation when deleting all project services',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
