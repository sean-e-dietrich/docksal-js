const Table = require('cli-table');

exports.command = 'list';
exports.desc = 'List running Docksal projects (alias: fin pl)';
exports.builder = function(yargs) {
  return yargs
      .options({
        'all': {
          'alias': 'a',
          'description': 'List all Docksal projects (stopped as well)',
          'default': false
        },
      });
};

exports.handler = async function(argv) {
  const table = new Table({
    head: ['PROJECT', 'STATUS', 'VIRTUAL HOST', 'PROJECT ROOT'],
    colors: false,
    style: {
      'padding-left': 0,
      'padding-right': 0,
      'head': ['reset']
    },
    colWidths: [20, 28, 69],
    colAligns: ['left'],
    chars: {
      'top': '' ,
      'top-mid': '' ,
      'top-left': '' ,
      'top-right': '',
      'bottom': '' ,
      'bottom-mid': '' ,
      'bottom-left': '' ,
      'bottom-right': '',
      'left': '' ,
      'left-mid': '' ,
      'mid': '' ,
      'mid-mid': '',
      'right': '' ,
      'right-mid': '' ,
      'middle': ''
    }
  });

  const docker = argv.docksal.docker;

  const containers = await docker.listContainers(argv.all);

  for (var x = 0; x < containers.length; x++) {
    const container = containers[x];
    table.push([
      container.Labels['com.docker.compose.project'],
      container.Status,
      container.Labels['io.docksal.virtual-host'],
      container.Labels['io.docksal.project-root']
    ]);
  }

  console.log(table.toString());
};
