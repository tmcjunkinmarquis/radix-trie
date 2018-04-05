const chai = require('chai');
const assert = chai.assert;
const Node = require('../src/Node.js');

describe('Node', function () {
  let node;

  beforeEach(function () {
    node = new Node('c')
  });

  it('should exist', function() {
    assert.isFunction(Node);
  })

  it('should have a defaulted complete word value of false', function() {
      assert.equal(node.completeWord, false);
    });

    


  
  //   it('should have a default popularity value of zero', () => {
  //     expect(node.popularity).to.equal(0)
  //   })
  // })
  
})