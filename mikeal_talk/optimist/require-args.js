var argv = require('optimist')
	   .usage('Usage: $0 -x [num] -y [num]')
	   .demand(['x','y'])
	   .argv;

// not called if req args not present
console.log(argv);
