exports.command = 'alias [command]';
exports.desc = 'Manage aliases that allow fin @alias execution (fin help alias)';
exports.builder = function(yargs) {
  return yargs
      .commandDir('alias');
};
exports.handler = function(argv) {};
