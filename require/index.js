const map = require('./helpers/map.js')

const nums = map([1, 2, 3], x => (x * x))

console.log({ nums })