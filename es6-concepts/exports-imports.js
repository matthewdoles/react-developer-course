// one export
// person.js
const person = {
    name: 'Matthew'
}
export default person
// default: only export of the file, receiving file can name it whatever  it likes

// multiple exports
// utils.js
export const clean = () => {}
export const baseData = 10;

// import all exports
// app.js
import person from './person.js'
import prs from './person.js'

import { baseData } from './utility.js'
import { clean as Clean } from './utility.js'
// 'name as defined in export' as 'alias'
import * as bundled from './utility.js'