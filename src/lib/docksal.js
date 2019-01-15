const chalk = require('chalk');

module.exports = () => {

  const docksal = {};
  docksal.version = '1.80.1';
  docksal.loadGlobalConfiguration = function () {

  };

  docksal.env = require('./env');
  docksal.docker = require('./docker')(docksal.env);
  docksal.sshAgent = require('./ssh-agent')(docksal.docker);
  docksal.messages = require('./messages')(docksal.env);
  docksal.input = require('./input')(docksal.env);

  docksal.help = () => {
    let help = chalk`Docksal control cli utility v${docksal.version}

Usage: fin <command>

{green Management Commands:}
  {yellow db <command>}             	Manage databases ({yellow fin help db})
  {yellow project <command>}        	Manage project(s) ({yellow fin help project})
  {yellow ssh-key <command>}        	Manage SSH keys ({yellow fin help ssh-key})
  {yellow system <command>}         	Manage Docksal ({yellow fin help system})
  {yellow vm <command>}             	Manage Docksal VM ({yellow fin help vm})

{green Commands:}
  bash [service]           	Open shell into service's container. Defaults to {yellow cli}
  logs [service]           	Show service logs (e.g., Apache logs, MySQL logs) and Unison logs ({yellow fin help logs})
  exec <command|file>      	Execute a command or a script in {yellow cli}
  config [command]         	Show or change configuration ({yellow fin help config})
  run-cli (rc) <command>   	Run a command in a standalone cli container in the current directory ({yellow fin help run-cli})

  drush [command]          	Drush command (requires Drupal)
  drupal [command]         	Drupal Console command (requires Drupal 8)
  platform [command]       	Platform.sh's CLI (requires docksal/cli 2.3+)
  terminus [command]       	Pantheon's Terminus (requires docksal/cli 2.1+)
  wp [command]             	WordPress CLI command (requires WordPress)
  composer [command]       	Run Composer commands
  docker [command]         	Run Docker commands directly
  docker-compose [command] 	Run docker-compose commands directly

  init                     	Initialize a project (override it with your own automation {yellow fin help init})
  addon <command>          	Addons management commands: install, remove ({yellow fin help addon})
  alias                    	Manage aliases that allow fin @alias execution ({yellow fin help alias})
  cleanup [--hard]         	Remove unused Docker images and projects ({yellow saves disk space})
  share                    	Create temporary public url for current project using ngrok
  exec-url <url>           	Download script from URL and run it on host (URL should be public)
  image <command>          	Image management commands: registry, save, load ({yellow fin help image})
  hosts <command>          	Hosts file commands: add, remove, list ({yellow fin help hosts})
  vhosts                   	List all virtual *.docksal hosts registered in Docksal proxy
  sysinfo                  	Show system information
  diagnose                 	Show diagnostic information for troubleshooting and bug reporting
  version (--version, v, -v)	Print fin version. [v, -v] prints short version
  {yellow update}                   	{yellow Update Docksal}`;

    help += chalk`
  
  {green Addons:}
  `;

    help += chalk`
  
  {green Custom commands:}
  `;

    return help;
  };

  return docksal;
};
