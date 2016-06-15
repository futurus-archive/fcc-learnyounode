var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
	    response.write(body.toUpperCase())
	    response.end()
        });

	// alternatively
	// request.pipe(map(function(chunk) { return chunk.toString().toUpperCase() })).pipe(response)
    }
})  
server.listen(port) 
