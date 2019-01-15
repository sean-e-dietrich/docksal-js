exports.command = 'stop [service]';
exports.desc = 'Stop all or specified project services (alias: fin stop)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'all': {
          'alias': 'a',
          'description': 'Stop all services on all Docksal projects',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
