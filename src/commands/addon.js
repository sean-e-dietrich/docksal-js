exports.command = 'addon [command]';
exports.desc = 'Addons management commands: install, remove (fin help addon)';
exports.builder = function(yargs) {
  return yargs
      .commandDir('addon');
};
exports.handler = function(argv) {};
