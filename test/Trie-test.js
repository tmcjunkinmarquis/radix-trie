const chai = require('chai');
const assert = chai.assert;
const fs = require('fs');
const Trie = require('../src/Trie.js');
const text = '/usr/share/dict/words'
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


describe('Trie', function () {
  let trie;

  beforeEach(function() {
    trie = new Trie();
  })

  it('should exist', function() {
    assert.isFunction(Trie);
  })

  // it('should track the number of words', () => {
  //   expect(trie.wordCount).to.equal(0);
  // })

  // it('should store child nodes', () => {
  //   expect(trie.children).to.deep.equal({})
  // })

  // describe('Insert', () => {

  //   it('should increment number of words', () => {
  //     trie.insert('pizza');
  //     expect(trie.wordCount).to.equal(1);
  //   });

  //   it('should create keys in children object of the first letter', () => {
  //     trie.insert('tacocat');
  //     trie.insert('pizza');
  //     trie.insert('cat');

  //     expect(Object.keys(trie.children)).to.deep.equal(['t', 'p', 'c']);

  //   });
    
  //   it('should add the word', () => {
  //     trie.insert("pizza");
  //     trie.insert("pizzas");
  //     trie.insert("piano");
  //     trie.insert("dog");
  //     trie.insert("dogs");

  //     expect(trie.children['p']).to.exist;
  //     expect(trie.children['p'].children['i']).to.exist;
  //     expect(trie.children['p'].children['i'].children['z'].children['z'].children['a']).to.exist;
  //     expect(trie.children['p'].children['i'].children['z'].children['z'].children['a'].completeWord).to.be.true;

  //     expect(trie.children['d']).to.exist;
  //     expect(trie.children['d'].children['o']).to.exist;
  //     expect(trie.children['d'].children['o'].children['g'].completeWord).to.be.true;

  //   }); 

  //   it('should only create one node when two words with same prefix are added', () => {
  //     trie.insert("pizza");
  //     trie.insert("piano");

  //     var childNodes1 = Object.keys(trie.children);

  //     expect(childNodes1.length).to.equal(1);
  //     expect(childNodes1).to.deep.equal(['p']);

  //     let trie2 = new Trie();

  //     trie2.insert("lamb");
  //     trie2.insert("lady");

  //     var childNodes2 = Object.keys(trie2.children);

  //     expect(childNodes2.length).to.equal(1);
  //     expect(childNodes2).to.deep.equal(['l']);
  //   }) 

  //   it('should not increment again for the same word', () => {
  //     trie.insert("pizza");
  //     expect(trie.wordCount).to.equal(1);

  //     trie.insert("pizza");
  //     expect(trie.wordCount).to.equal(1);
  //   });
  // })

  // describe('Suggest', () => {
  //   beforeEach(() => {
  //   trie.insert('piano');
  //   trie.insert('pizza');
  //   trie.insert('pizzas');
  //   trie.insert('dog');
  // })

  //   it('should have a method, suggest', () => {
  //     expect(trie.suggest('dog')).to.be.a.function;
  //   })

  //   it('should only suggest words with a mathching prefix', () => {
  //     let results = trie.suggest('pi');

  //     let check1 = results.some(result => result === 'pizza')
  //     let check2 = results.some(result => result === 'pizzas')
  //     let check3 = results.some(result => result === 'piano')
  //     let check4 = results.some(result => result === 'dog')

  //     expect(check1).to.be.true;
  //     expect(check2).to.be.true;
  //     expect(check3).to.be.true;
  //     expect(check4).to.be.false;

  //     let results2 = trie.suggest('d');

  //     let check5 = results2.some(result => result === 'pizza')
  //     let check6 = results2.some(result => result === 'pizzas')
  //     let check7 = results2.some(result => result === 'piano')
  //     let check8 = results2.some(result => result === 'dog')

  //     expect(check5).to.be.false;
  //     expect(check6).to.be.false;
  //     expect(check7).to.be.false;
  //     expect(check8).to.be.true;
  //   })
  // })

  // describe('Populate', () => {
  //   it('should populate a dictionary', () => {
  //     trie.populate(dictionary);
  //     expect(trie.wordCount).to.equal(235886);
  //   })
  // })
  
  // describe('select', () => {
  //   it('should prioritize ', () => {
  //     trie.populate(dictionary);
  //     expect(trie.suggest('piz')).to.deep.equal([ 'pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle' ]);
  //     trie.select('pizzeria');
  //     expect(trie.suggest('piz')).to.deep.equal([ 'pizzeria', 'pize', 'pizza', 'pizzicato', 'pizzle' ]);
  //   });
  // });
  
  // describe('delete', () => {
  //   it('should delete the word ', () => {
  //     trie.populate(dictionary);
  //     expect(trie.suggest('piz')).to.deep.equal([ 'pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle' ]);
      
  //     trie.delete('pizzeria');
  //     expect(trie.suggest('piz')).to.deep.equal([ 'pize', 'pizza', 'pizzicato', 'pizzle' ]);
  //   });
  // });
})





  

