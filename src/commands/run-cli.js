exports.command = 'run-cli [command]';
exports.aliases = ['rc'];
exports.desc = 'Run a command in a standalone cli container in the current directory (fin help run-cli)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'clean': {
          'description': 'Run command with a non-persistent $HOME directory',
          'type': 'boolean',
        },
        'cleanup': {
          'description': 'Clean the persistent $HOME directory and run command',
          'type': 'boolean',
        },
        'debug': {
          'description': 'Print container debug output',
          'type': 'boolean',
        },
        'image': {
          'description': 'Override default container image',
        },
        'e': {
          'description': 'Pass environment variable(s) to the container',
        },
        'T': {
          'description': 'Disable pseudo-tty allocation (useful to get clean stdout)',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
