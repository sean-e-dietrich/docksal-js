exports.command = 'exec';
exports.desc = 'Execute a command or a script in cli';
exports.builder = function(yargs) {
  return yargs
      .options({
        'in': {
          'description': 'Name of the service to execute the command in.',
          'type': 'string',
          'default': 'cli',
        },
        '-T': {
          'type': 'boolean',
          'description': `Disable pseudo-tty allocation.
Useful for non-interactive commands when output is saved into a variable for further comparison.
In a TTY mode the output may contain unexpected invisible control symbols.`,
        },
      });
};
exports.handler = function(argv) {};
