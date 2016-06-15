var net = require('net')
var port = process.argv[2]
var ftime = require('strftime')

var server = net.createServer(function (socket) {
	//  "YYYY-MM-DD hh:mm"
	socket.end(ftime('%Y-%m-%d %H:%M') + '\n')
})  
server.listen(port) 
