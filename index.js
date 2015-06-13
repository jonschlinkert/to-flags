'use strict';

var isObject = require('is-plain-object');
var toArg = require('to-arg');

/**
 * Generate an array of command line args from
 * the given `keys` or all options.
 *
 * ```js
 * var options = {
 *   foo: 'bar',
 *   abc: true,
 *   xyz: 10,
 *   one: false
 * };
 *
 * // create command line args for all options
 * toFlags(options);
 * //=> ['--foo=bar', '--abc', '--xyz=10', '--no-one']
 *
 *
 * // or specific options
 * toFlags(options, ['foo', 'abc']);
 * //=> ['--foo=bar', '--abc']
 * ```
 *
 * @param  {Object} `obj`
 * @param  {Array} `keys`
 * @return {Array} Array of args
 * @api public
 */

module.exports = function(obj, keys) {
  if (!isObject(obj)) {
    throw new TypeError('to-flags expects an object.');
  }
  keys = keys || Object.keys(obj);
  return keys.map(function (key) {
    return toArg(key, obj[key]);
  });
};
