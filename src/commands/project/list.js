exports.command = 'list';
exports.desc = 'List running Docksal projects (alias: fin pl)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'all': {
          'alias': 'a',
          'description': 'List all Docksal projects (stopped as well)',
        },
      });
};
exports.handler = function(argv) {};
