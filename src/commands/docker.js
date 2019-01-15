var shellescape = require('shell-escape');

exports.command = 'docker [command]';
exports.desc = 'Run Docker commands directly';
exports.builder = function(yargs) {

};
exports.handler = function(argv) {
  const command = shellescape(process.argv.slice(3));
};
