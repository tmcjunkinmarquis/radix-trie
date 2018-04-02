const chai = require('chai');
const assert = chai.assert;
const Node = require('../src/Node.js');

describe('Node', function () {
  it('should exist', function() {
    assert.isFunction(Node);
  })
})