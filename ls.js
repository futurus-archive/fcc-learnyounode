var fs = require('fs');

fs.readdir(process.argv[2], function(err, files) {
	files.forEach(function(file) {
		if (file.indexOf('.') >= 0 && file.substring(file.length - process.argv[3].length, file.length) === process.argv[3]) {
			console.log(file);
		}
	});
});


