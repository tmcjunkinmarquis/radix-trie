const chai = require('chai');
const assert = chai.assert;
const fs = require('fs');
const Trie = require('../src/Trie.js');
const text = '/usr/share/dict/words'
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    assert.isFunction(Trie);
  })

  it('should track the number of words', () => {
    assert.equal(trie.wordCount, 0);
  })

  describe('Insert', () => {

    it('should make a root node object when the first word is inserted', () => {
      trie.insert('howdy')

      assert.isObject(trie.rootNode);
    })

    it('should make a child with the first inserted word', () => {
      trie.insert('howdy')
      
      assert.deepNestedInclude(trie.rootNode.children, { howdy: { data: ['h', 'o', 'w', 'd', 'y'], completeWord: true, children: {} } });
    })

    it('should make a second child on the root when second word is inserted', () => {
      trie.insert('howdy');
      trie.insert('howser');
      console.log(trie.rootNode)

      assert.deepNestedInclude(trie.rootNode.children, { how: { data: ['h', 'o', 'w'], completeWord: false, children: {}}});
    })



    // trie.insert('dog')
    // trie.insert('how')

  })

});







