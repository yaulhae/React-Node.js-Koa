/* eslint-disable no-global-assign */

const { default: api } = require('./api/index.js')

require = require('esm')(module /*, options*/)
module.exports = require('./main.js')
