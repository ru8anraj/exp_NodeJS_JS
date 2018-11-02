console.log("node args -> ", process.argv);

const yargs = require('yargs');

var argv = yargs.argv;

console.log('yargs argv - > ', argv.name);
