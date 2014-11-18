var fs = require('fs');
var cp = require('child_process');

var usageText = "Usage: <filecount> <filenamebase> <filenameextension>";

function random(a, b) {
	return isNaN(b) ? 
		Math.floor(Math.random() * a) :
		(a + Math.floor(Math.random() * (b -a)));
}

function addToGit(data, filename) {
	// var cmd  =  'git add "' + filename + '"; ' +
	// 		' git commit -m "A random change of ' + data + ' to ' + filename + '"';

	return function(err) {
		var gitAdd, gitCommit;

		if (err) {
			console.error(err);
		} else {
			// gitAdd = cp.spawn('git', ['add', filename]);

			// gitAdd.stdout.on('data', function(data) {
			// 	var gitCommit = cp.spawn('git', ['commit', '-m', 'A random change of ' + data + ' to ' + filename]);
				
			// 	gitCommit.on('data', function(data) {
			// 		console.log(data);
			// 	})
				
			// 	console.log(data);
			// });

			gitAdd = cp.exec(('git add ' + filename), function(err, stdout) {
				if (!err) {
					console.log(stdout);
				} else {
					console.error(err);
				}
				gitAdd.stdin.end();
				
				gitCommit = cp.exec(('git commit -m "A random change of ' + data + ' to ' + filename +'" "' + filename +'"'), function(err, stdout){
					if (!err) {
						console.log(stdout);
					} else {
						console.error(err);
					}
					gitCommit.stdin.end();
				});
			});
		}
	}
}

function generateRandomChanges(count, filenamebase, extension) {
	var index = 1, filename, data, commitMsg;
	while (index<=count) {
		filename = filenamebase + index + '.' + extension;
		data = random(10000);
		// cmd = 'git add "' + filename + '"; ' +
		// 	' git commit -m "A random change of ' + data + ' to ' + filename + '"';
				
		console.log('data: ' + data);
		console.log('filename: ' + filename);

		fs.writeFile(filename, data, addToGit(data, filename));
		index++;
	}
}

function main() {
	var cmdArgs = process.argv.slice(2);
	generateRandomChanges(parseInt(cmdArgs[0]), cmdArgs[1], cmdArgs[2]);
}

if (process.argv.length !== 5) {
	console.error('\n' + usageText + '\n');
} else {
	main();
}