'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _split = require('split');

var _split2 = _interopRequireDefault(_split);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _through2 = require('through2');

var _through22 = _interopRequireDefault(_through2);

var _concatStream = require('concat-stream');

var _concatStream2 = _interopRequireDefault(_concatStream);

function parse(fpath) {
  var input = _fs2['default'].createReadStream(fpath);
  var json = undefined;

  return input.pipe((0, _split2['default'])()).pipe((0, _through22['default'])(function (chunk, enc, next) {
    this.push(chunk);
    next();
  })).pipe((0, _concatStream2['default'])(function (file) {
    // console.log(file.toString())
    json = file;
    return file.toString();
  }));
}

module.exports = exports['default'];
