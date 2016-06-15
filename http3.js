var http = require('http');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8')
	var output1 = ""
	res.on('data', function(chunk) {
		output1 += chunk;
	})
	res.on('end', function () {
		http.get(process.argv[3], function(res) {
			res.setEncoding('utf8');
			var output2 = ""
			res.on('data', function(chunk) { output2 += chunk; })
			res.on('end', function() { 
				http.get(process.argv[4], function(res) {
					res.setEncoding('utf8')
					var output3 = ""
					res.on('data', function(ck) { output3 += ck; })
					res.on('end', function() { 
						console.log(output1)
						console.log(output2)
						console.log(output3)
					})
				})
			})
		})
	})
	
	res.on('error', console.error)
});
