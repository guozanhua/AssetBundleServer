var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var path = require('path');

var schemaEnum = require('../enums/schemaEnum');
var config = require('../../config/config');

var fileinfoSchema = new Schema({
  basename: {
    type: String,
    required: '{PATH} is required!'
  },
  dirname: {
    type: String,
    required: '{PATH} is required!'
  },
  fileType: {
    type: String,
    enum: schemaEnum.fileType,
    required: '{PATH} is required!'
  },
  uploadTime: {
    type: Date,
    required: '{PATH} is required!'
  },
  downloadCount: Number
});

fileinfoSchema.virtual('fullPath').get(function () {
  return path.join(this.dirname, basename);
});

fileinfoSchema.virtual('fullPath').set(function (fullPath) {
  this.basename = path.basename(fullPath);
  this.dirname = path.dirname(fullPath);
});

mongoose.model('Fileinfo', fileinfoSchema);