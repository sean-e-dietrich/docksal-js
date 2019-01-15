const inquirer = require('inquirer');

const input = {};

module.exports = function(env) {

  const buildQuestion = async function (question) {
    return inquirer.prompt(question);
  };

  input.prompt = async (msg) => {
    return await buildQuestion([
      {
        type: 'input',
        name: 'question',
        message: msg
      }
    ]);
  };

  input.confirm = async (msg) => {
    return buildQuestion([
      {
        type: 'confirm',
        name: 'question',
        message: msg
      }
    ]);
  };

  return input;
};
