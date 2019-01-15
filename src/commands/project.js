exports.command = 'project [command]';
exports.desc = 'Manage project(s) (fin help project)';
exports.builder = function(yargs) {
  return yargs
      .commandDir('project');
};
exports.handler = function(argv) {};
