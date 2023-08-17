function sum (a, b) {
  return a + b
}

function subs (a, b) {
  return a - b
}

// commonJS
// module.exports = {
//   sum,
//   subs
// }

// EcmaScript modules
export default {
  sum,
  subs
}