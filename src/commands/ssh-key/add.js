exports.command = 'add [key-name]';
exports.desc = `Add a private SSH key from $HOME/.ssh by file name
Adds all default keys (id_rsa/id_dsa/id_ecdsa) if no file name is given.
`;
exports.builder = function(yargs) {

};
exports.handler = function(argv) {};
