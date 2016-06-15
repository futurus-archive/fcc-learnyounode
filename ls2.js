var myMod = require('./lsModule');

myMod(process.argv[2], process.argv[3], function(err, files) {
	if (!err) {
		files.forEach(function(file) {
			console.log(file);
		});
	} else {
		console.log('There is an error: ' + err);
	}
});
