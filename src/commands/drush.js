const parse = require('yargs-parser');

exports.command = 'drush [command]';
exports.desc = 'Drush command (requires Drupal)';
exports.builder = function(yargs) {

};
exports.handler = function(argv) {
  const docker = argv.docksal.docker;
  const args = parse((process.argv.slice(3)).map(String));
  docker.exec('osher_cli_1_815453f15813', 'drush ' + args);
};
