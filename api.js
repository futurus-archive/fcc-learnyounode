var url = require('url');
var restify = require('restify');
var port = process.argv[2];

function time(req, res) {
	var parse = url.parse(req.url, true);
	var d = new Date(parse.query.iso);

	res.writeHead(200, { 'Content-Type': 'application/json' })
	if (req.params[0] === 'unixtime') {
		res.write('{ "unixtime": ' + d.getTime() + '}');
	} else {
		res.write('{ \n' +
			    	'"hour": ' + d.getHours() + ',\n' +
		    		'"minute": ' + d.getMinutes() + ',\n' +
		    		'"second": ' + d.getSeconds() + '\n' +
				  '}');
	}
	res.end()
};

var server = restify.createServer();
server.get(/\/api\/(parsetime|unixtime)/, time);
server.listen(port);
