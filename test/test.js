import parse from '../lib/betterJson'
import path from 'path'

let fpath = path.resolve(__dirname, './test-comments.json')
let json = parse(fpath)
json.pipe(process.stdout)
