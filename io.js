var fs = require('fs');

if (process.argv.length > 1) {
	var buf = fs.readFileSync(process.argv[2]).toString();
	console.log(buf.split('\n').length - 1);
}
