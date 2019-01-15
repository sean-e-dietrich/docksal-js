module.exports = function(env) {
  const messages = {};

  messages.warning = (msg) => {

  };

  messages.error = (msg) => {
    console.log(msg);
  };

  messages.errorExit = (msg) => {
    messages.error(msg);
    process.exit(1);
  };
  return messages;
};
