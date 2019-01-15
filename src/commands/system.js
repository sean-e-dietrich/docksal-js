exports.command = 'system [command]';
exports.desc = 'Manage Docksal (fin help system)';
exports.builder = function(yargs) {
  return yargs
      .options({
      })
      .commandDir('system');
};
exports.handler = function(argv) {};
