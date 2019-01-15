exports.command = 'version';
exports.desc = 'Print fin version. [v, -v] prints short version';
exports.aliases = ['v'];
exports.handler = function(argv) {
  if (argv['_'][0] == 'version') {
    const yargs = argv.yargs;
    yargs.getUsageInstance().showVersion();
  }
  else if (argv['_'][0] == 'v') {
    console.log(argv.docksal.version);
  }
};
