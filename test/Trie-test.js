const chai = require('chai');
const assert = chai.assert;
const fs = require('fs');
const Trie = require('../src/Trie.js');
const text = '/usr/share/dict/words';
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    assert.isFunction(Trie);
  });

  it('should track the number of words', () => {
    assert.equal(trie.wordCount, 0);
  });

  describe('Insert', () => {

    it('should make a root node object when the first word is inserted', () => {
      trie.insert('howdy');

      assert.isObject(trie.rootNode);
    });

    it('should make a child with the first inserted word', () => {
      trie.insert('howdy');
      
      assert.deepNestedInclude(trie.rootNode.children, { howdy: { data: ['h', 'o', 'w', 'd', 'y'], completeWord: true, children: {} } });
    });

    it('MATCH 1 TEST: should add to the root a child that has no common substring with existing children', ()=>{
      trie.insert('howdy');
      trie.insert('cat');
      trie.insert('pump');

      assert.deepNestedInclude(trie.rootNode.children, { 
        howdy: { data: ['h', 'o', 'w', 'd', 'y'], completeWord: true, children: {} }, 
        cat: { data: ['c', 'a', 't'], completeWord: true, children: {} }
      });
    });
    
    it('MATCH 2 TEST: should make a revised child on the root when second word shares prefix letters with an existing child', () => {
      trie.insert('howdy');
      trie.insert('howser');

      assert.deepNestedInclude(trie.rootNode.children, { how: { data: ['h', 'o', 'w'], completeWord: false, children: {dy:{data: ['d','y'], completeWord: true, children: {}}, ser:{data: ['s','e', 'r'], completeWord: true, children: {}}}}});
    });

    it.only('should add a new child to a root with an existing child', () => {
      const dictionary = ['howdy', 'howser', 'dog'];
      dictionary.forEach(word => trie.insert(word));

      assert.deepNestedInclude(trie.rootNode.children, { 
        how: { data: ['h', 'o', 'w'], completeWord: false, children: {dy:{data: ['d','y'], completeWord: true, children: {}}, ser:{data: ['s','e', 'r'], completeWord: true, children: {}}}}, 
        dog: { data: ['d','o','g'], completeWord: true, children: {} } });
    });

    it('should add a word that matches a substring node of an exisiting word and update the node\'s completeWord to true', () => {
      const dictionary = ['howdy', 'howser', 'dog', 'how'];
      dictionary.forEach(word => trie.insert(word));

      assert.deepNestedInclude(trie.rootNode.children, { how: { data: ['h', 'o', 'w'], completeWord: true, children: {dy:{data: ['d','y'], completeWord: true, children: {}}, ser:{data: ['s','e', 'r'], completeWord: true, children: {}}}}, dog: { data: ['d','o','g'], completeWord: true, children: {} } });
    });
  });

  describe('Suggest', () => {
    it('Should suggest a word based on a prefix', ()=> {
      trie.insert('lost');
      let suggestion = trie.suggest('lo');
      assert.include('lost', suggestion);
    });
    it('Should suggest mulitple words based on a given prefix', () => {
      const dictionary = ['howdy', 'how', 'howser', 'house', 'lost', 'lose',
                         'loser', 'losing', 'relax', 'relates', 'relace', 'relays'];
      
      dictionary.forEach(word => trie.insert(word));
      let hoPrefix = trie.suggest('ho');
      assert.include('howdy', prefix);
      assert.include('how', prefix);
      assert.include('howser', prefix);
      assert.include('house', prefix);
      let loPrefix = trie.suggest('los');
      assert.include('lost', loPrefix);
      assert.include('lose', loPrefix);
      assert.include('loser', loPrefix);
      assert.include('losing', loPrefix);
      let relPrefix = trie.suggest('rela');
      assert.include('relax', relPrefix);
      assert.include('relates', relPrefix);
      assert.include('relace', relPrefix);
      assert.include('relays', relPrefix);
  });

})

});
