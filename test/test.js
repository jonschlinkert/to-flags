/*!
 * to-flags <https://github.com/jonschlinkert/to-flags>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var toFlags = require('..');

describe('toFlags', function () {
  it('should:', function () {
    toFlags({a: 'b'}).should.eql([ '--a=b' ]);
  });

  it('should throw an error when invalid arguments are passed.:', function () {
    (function () {
      toFlags();
    }).should.throw('to-flags expects an object.');
  });
});
