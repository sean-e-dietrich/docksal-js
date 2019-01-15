exports.command = 'config [command]';
exports.desc = 'Manage databases (fin help db)';
exports.builder = function(yargs) {
  return yargs
      .options({
      })
      .commandDir('config');
};
exports.handler = function(argv) {};
