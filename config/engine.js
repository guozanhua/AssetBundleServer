var fs = require('fs');
var Hogan = require('hogan.js')

// use hogan.js for template engine
module.exports = function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) throw new Error(err);
    
    var template = Hogan.compile(content.toString());
    var rendered = template.render(options);

    return callback(null, rendered);
  });
};