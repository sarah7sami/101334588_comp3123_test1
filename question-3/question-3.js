// Question 3
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

// Remove Log files
fs.readdir(logDir, (err, files) => {
    if (err) { // this is happening if there are no log files - so this message is displayed and the program moved to the create log files code block
        console.log("Creating Log Directory ...");
    } else {
        files.forEach(file => {
        console.log(file + ' removed.');
        fs.unlink(path.join(logDir, file), err => {
            if (err) {
            console.log(err);
            }
        });
        });
        fs.rmdir(logDir, err => {
        if (err) {
            console.log(err);
        }
        });
    }
    }
);

// 2. Create Log files
fs.mkdir(logDir, err => {
    if (err) {
        console.log("Removing Log Directory ..."); // this is happening if there are already log files that were deleted in the first code block so the message is appropriate for user's understanding
    } else {
        process.chdir(logDir);
        for (let i = 0; i < 10; i++) {
        fs.writeFile(`log${i}.txt`, `This is log file ${i}`, err => {
            if (err) {
            console.log(err);
            } else {
            console.log(`log${i}.txt`);
            }
        });
        }
    }
    }
);

// Run the following command to test the code:
// node question-3/question-3.js 



