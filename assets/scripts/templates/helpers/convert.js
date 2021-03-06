// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'
const moment = require('moment')

const convert = (str) => {
  const momentNow = moment().format()
  const dueIn = moment(str).add(7, 'd').format()
  if (dueIn > momentNow) {
    return `due in ${moment(dueIn).fromNow()}`
  } else {
    return 'task overdue!'
  }
}

module.exports = convert
