var http = require('http');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8')
	var output = ""
	res.on('data', function(chunk) {
		output += chunk;
	})
	res.on('end', function () {
		console.log(output.length);
		console.log(output);
	})
	res.on('error', console.error)
});
