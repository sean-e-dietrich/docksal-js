exports.command = 'create';
exports.desc = `Create a new project with a pre-configured boilerplate:
Drupal, Wordpress, Magento, Laravel, Backdrop, Hugo, Gatsby, and others
`;
exports.builder = function(yargs) {
  return yargs
      .options({
        'name': {
          'description': 'Provide project name upfront',
        },
        'choice': {
          'description': 'Provide software choice number upfront',
          'choices': [
            'drupal8',
            'drupal8-composer',
            'drupal7',
            'wordpress',
            'magento',
            'laravel',
            'symfony-skeleton',
            'symfony-webapp',
            'gravcms',
            'backdrop',
            'hugo',
            'gatsby',
            'html',
          ],
        },
        'yes': {
          'alias': 'y',
          'description': 'Avoid confirmation',
          'type': 'boolean',
        },
      });
};
exports.handler = function(argv) {};
