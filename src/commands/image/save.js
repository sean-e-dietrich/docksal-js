exports.command = 'save';
exports.desc = 'Save docker images into a tar archive.';
exports.builder = function(yargs) {
  return yargs
      .options({
        'system': {
          'description': 'Save Docksal system images.',
          'type': 'boolean',
        },
        'project': {
          'description': 'Save current project\'s images.',
          'type': 'boolean',
        },
        'all': {
          'description': 'Save all images available on the host.',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
