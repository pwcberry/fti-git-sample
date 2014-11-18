var fs = require('fs');
var cp = require('child_process');

var usageText = "Usage: <filecount> <filenamebase>";

function random(a, b) {
	return isNaN(b) ? 
		Math.floor(Math.random() * a) :
		(a + Math.floor(Math.random() * (b -a)));
}

function addToGit(filename, data, next) {
	return function() {
		var gitAdd, gitCommit;
		
		fs.writeFileSync(filename, data);

		gitAdd = cp.exec(('git add ' + filename), 
			function(err, stdout) {
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

					if (typeof next === 'function') {
						next();
					}
				});
			});
	};
}

function generateRandomChanges(count, filenamebase) {
	var index = 1, extension = 'txt', filenames = [], data = [], actions;
	while (count > 0) {
		filename = filenamebase + count + '.' + extension;
		data = random(10000);

		if (index == 1) {
			actions = addToGit(filename, data);
		} else {
			actions = addToGit(filename, data, actions);
		}

		index++;
		count--;
	}

	actions();
}

function main() {
	var cmdArgs = process.argv.slice(2);
	generateRandomChanges(parseInt(cmdArgs[0]), cmdArgs[1]);
}

if (process.argv.length !== 4) {
	console.error('\n' + usageText + '\n');
} else {
	main();
}