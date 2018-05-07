const path = require("path"); // helps to build a path from the compile to the inbox.sol file / use module for cross platform compatibility
const fs = require("fs");
const solc = require("solc");

// can't use the require syntax to get the contract code because the JS compiler would expect it 
// to contain JS code that it can immediately execute... need to read out the file contents instead
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// need to specify the source code and the number of contracts you want to compile / then make it available
// if multiple files of source code are supplied, the contract ':' will be prefixed with the file name
module.exports = solc.compile(source, 1).contracts[':Inbox'];