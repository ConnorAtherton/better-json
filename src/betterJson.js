import split from 'split'
import fs from 'fs'
import path from 'path'
import through from 'through2'
import concat from 'concat-stream'

export default function parse(fpath) {
  let input = fs.createReadStream(fpath)
  let json = undefined

  return input.pipe(split())
    .pipe(through(function(chunk, enc, next) {
      this.push(chunk)
      next()
    }))
    .pipe(concat(function(file) {
      // console.log(file.toString())
      json = file
      return file.toString()
    }))
}
