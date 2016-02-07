var assert = require("assert")
  , precedence = require('../src/index.js')
  , or = precedence.or
  , and = precedence.and

describe('precedence', function() {

  describe('#or', function () {
    it('should consider 0 as a valid value', function() {
      assert.equal(or(0, 1, 2), 0)
    })

    it('should consider `null` as a invalid value', function() {
      assert.equal(or(null, 1, 2), 1)
    })

    it('should consider `undefined` as a invalid value', function() {
      assert.equal(or(undefined, 1, 2), 1)
    })

    it('should consider `false` as a invalid value', function() {
      assert.equal(or(false, 1, 2), 1)
    })
  });

  describe('#and', function () {
    it('should consider 0 as a valid value', function() {
      assert.equal(and(0, 1), 1)
      assert.equal(and(0, 1, 2), 2)
      assert.equal(and(0, true), true)
    })

    it('should consider `null` as a invalid value', function() {
      assert.equal(and(null, 1, 2), false)
    })

    it('should consider `undefined` as a invalid value', function() {
      assert.equal(and(undefined, 1, 2), false)
    })

    it('should consider `false` as a invalid value', function() {
      assert.equal(and(0, false), false)
    })

  });

});
