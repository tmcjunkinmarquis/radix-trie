const Node = require('./Node.js');
// import Node from './Node'
class Trie {
  
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0; 
  }
  
  insert(word) { 
    let currentNode = this.rootNode;
    const matchZero = (word, node)=>{
      node.children[word] = new Node(word);
      node.children[word].completeWord = true; 
    };
    if(!Object.keys(currentNode.children).length) {
      console.log(word, 'match 0')
      return matchZero(word, currentNode);   
    }

    let resultMatchOne = this.findMatchOne(currentNode, word);
    console.log(word, 'match 1:', resultMatchOne)

    let resultMatchTwo = this.findMatchTwo(currentNode, word);
    console.log(word, 'match 2:', resultMatchTwo)


    this.determineAction(currentNode, word, resultMatchOne)
  }

  findMatchTwo(node, word) { 
    const wordLetters = [...word];
    const nodeKids = Object.keys(node.children);
    let result;
    const lettersOfMatchedPrefix = []
    const matchTypeTwo = (node, word) => { 
      let kidLetters = [];
      let allKidsAsLetters = nodeKids.map(kid=>{
        kidLetters = [...kid];
        return kidLetters;
      });

      

      allKidsAsLetters.forEach((array, i)=>{
        if(array[i] === wordLetters[i]){
          result = true;
          lettersOfMatchedPrefix.push(array[i])
        }
      });    
    };
    matchTypeTwo(node, word);
    return [result, lettersOfMatchedPrefix];
  }

  findMatchOne(node, word) { 
    const wordLetters = [...word];
    const nodeKids = Object.keys(node.children);
    let result;
    const matchTypeOne = (node, word) => { 
      let kidLetters = [];
      let allKidsAsLetters = nodeKids.map(kid=>{
        kidLetters = [...kid];
        return kidLetters;
      });

      allKidsAsLetters.forEach((array)=>{
        if(array[0] !== wordLetters[0]){
          result = true;
        }
      });    
    };
    matchTypeOne(node, word);
    return result;
  }

  determineAction(node, word, resultMatchOne) {
    if(resultMatchOne){
      node.children[word] = new Node(word);
      node.children[word].completeWord = true;
    }

    if(resultMatchTwo) {
      console.log('hi')
      // const parsedKidNode = new Node(prefix);
      // delete node.children[kidMatch];
      // node.children[prefix] = parsedKidNode;
      // const suffix1 = wordLetters.slice(letterCounter);
      // const suffix2 = kidLetters.slice(letterCounter);
      // node.children[prefix].children[suffix1.join('')] = new Node(suffix1.join(''));
      // node.children[prefix].children[suffix1.join('')].completeWord = true;
      // node.children[prefix].children[suffix2.join('')] = new Node(suffix2.join(''));
      // node.children[prefix].children[suffix2.join('')].completeWord = true;  
    }
  }

}

module.exports = Trie;