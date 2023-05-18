// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data on file
lib.create = function (dir, file, data, callback) {
  // open file for writing
  fs.open(
    `${lib.basedir + dir}/${file}.json`,
    'wx',
    function (err, fileDescriptor) {
      if (!err && fileDescriptor) {
        // convert data to string
        const stringData = JSON.stringify(data);

        // write data to file and then close it
        fs.writeFile(fileDescriptor, stringData, (errWriteFile) => {
          if (!errWriteFile) {
            fs.close(fileDescriptor, (errClose) => {
              if (!errClose) {
                callback(false);
              } else {
                callback('error to close file');
              }
            });
          } else {
            callback('Error writing to new file');
          }
        });
      } else {
        callback(err);
      }
    }
  );
};

// Read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
    callback(err, data);
  });
};

// update data in file
lib.update = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err1, fileDescriptor) => {
    if (!err1) {
      // convert data to string
      const stringData = JSON.stringify(data);

      //  truncate the file
      fs.ftruncate(fileDescriptor, (err2) => {
        if (!err2) {
          // write file and close it
          fs.writeFile(fileDescriptor, stringData, (err3) => {
            if (!err3) {
              // close the file
              fs.close(fileDescriptor, (err4) => {
                if (!err4) {
                  callback(false);
                } else {
                  callback('error close file');
                }
              });
            } else {
              callback('error occered write file');
            }
          });
        } else {
          callback('error truncating file');
        }
      });
    } else {
      callback('The file may not exist');
    }
  });
};

// delete existing file
lib.delete = (dir, file, callback) => {
  // unlink file
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback('This file may not exist');
    }
  });
};

module.exports = lib;
