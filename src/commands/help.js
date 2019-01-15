exports.command = 'help [message]';
exports.desc = 'Show Help';
exports.builder = function(yargs) {

};

exports.handler = function(argv) {
  console.log(argv.message);
};
