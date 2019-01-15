const yargs = require('yargs');
const docksal = require('./lib/docksal')();

let args = yargs
    .scriptName('fin')
    .commandDir('commands')
    .demandCommand(1, '', 'See \'fin help\' for the list of available commands')
    .showHelpOnFail(true)
    .wrap(null)
    .updateStrings({
      'Positionals:': 'Arguments:',
    });

const usage = yargs.getUsageInstance();

// Override output of Version Command.
usage.showVersion = () => {
  const logger = yargs._getLoggerInstance();
  logger.log('fin version: ' + docksal.version);
};

// Override output of Help Command.
usage.showHelp = (level) => {
  console.log(yargs.get)
  const logger = yargs._getLoggerInstance();
  logger.log(docksal.help());
};

argv = args
    .middleware([
      (argv) => {
        return {
          docksal: docksal
        };
      },
      (argv) => {
        return {
          yargs: yargs
        };
      }
    ])
    .argv;
