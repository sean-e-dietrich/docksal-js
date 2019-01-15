exports.command = 'db [command]';
exports.desc = 'Manage databases (fin help db)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'db': {
          'describe': 'Use another database.',
          'type': 'string',
          'default': 'MYSQL_DATABASE',
        },
        'db-user': {
          'describe': 'Use another mysql username',
          'type': 'string',
          'default': 'root',
        },
        'db-password': {
          'describe': 'Use another database password',
          'type': 'string',
          'default': 'MYSQL_ROOT_PASSWORD',
        },
        'db-charset': {
          'describe': 'Override charset when creating a database',
          'type': 'string',
          'default': 'utf8',
        },
        'db-collation': {
          'describe': 'Override collation when creating a database',
          'type': 'string',
          'default': 'utf8_general_ci',
        },
      })
      .commandDir('db');
};
exports.handler = function(argv) {};
