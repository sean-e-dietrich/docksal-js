const fs = require('fs-extra');

module.exports = function (env) {
  const config = {};

  /**
   * Set value(s) for the variable(s) in project ENV file
   *
   * @param variable
   *   The variable name to set.
   * @param value
   *   The value to set the variable to.
   * @param localEnv
   *   The environment file to write
   * @param global
   *   Is this the global file to write to.
   */
  config.set = (variable, value, localEnv = '', global = false) => {

  };

  /**
   * Remove variable(s) from project ENV file
   *
   * @param variable
   *   The variable name to remove.
   * @param localEnv
   *   The environment file to remove from.
   * @param global
   *   Is this the global file to remove from.
   */
  config.remove = (variable, localEnv = '', global = false) => {

  };

  /**
   * Get the value of the single variable from project ENV file
   *
   * @param variable
   *   The variable name to get.
   * @param localEnv
   *   The environment file to get from.
   * @param global
   *   Is this the global file to get from.
   */
  config.get = (variable, localEnv = '', global = false) => {

  };

  /**
   * Generate empty Docksal configuration for the project
   * @param stack
   *   Set non-default DOCKSAL_STACK during config generate
   * @param docroot
   *   Set non-default DOCROOT during config generate
   */
  config.generate = (stack = 'default', docroot = 'docroot') => {

  };

  /**
   * Display only environment variables section
   */
  config.list = () => {

  };

  /**
   * Display configuration for the current project
   *
   * @param showSecrets
   *   Do not truncate value of SECRET_* environment vars
   */
  config.show = (showSecrets = false) => {

  };

  return config;
};
