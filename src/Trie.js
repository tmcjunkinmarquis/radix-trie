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

    this.determineAction(currentNode, word, resultMatchOne)
  }

  findMatchTwo(node, word) { 
    const wordLetters = [...word];
    const nodeKids = Object.keys(node.children);
    let result;
    const matchTypeTwo = (node, word) => { 
      let kidLetters = [];
      let allKidsAsLetters = nodeKids.map(kid=>{
        kidLetters = [...kid];
        return kidLetters;
      });

      allKidsAsLetters.forEach((array)=>{
        if(array[0] == wordLetters[0]){
          result = true;
        }
      });    
    };
    matchTypeTwo(node, word);
    return result;
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

    // if(resultMatchTwo) {

    // }
  }

}

  
    // 

    // if (matchTypeTwo) {
    //   console.log('hi')
    // }

    // const matchTypeThree = (() => {
    //   if (true)
    //     return 5
    //   else
    //     return 10
    // })();

  

  
     
  // matchOne(node, word) {
  //   console.log(node);
  //   node.children[word] = new Node(word);
  //   node.children[word].completeWord = true;
  // }

  // matchTwo(word) {
    
  //       

  //   
  // }

  // matchThree(node, word) {

  // }

  // 
    // 
    // const parsedKidNode = new Node(prefix);
    // delete node.children[kidMatch];
    // node.children[prefix] = parsedKidNode;
    // const suffix1 = wordLetters.slice(letterCounter);
    // const suffix2 = kidLetters.slice(letterCounter);
    // node.children[prefix].children[suffix1.join('')] = new Node(suffix1.join(''));
    // node.children[prefix].children[suffix1.join('')].completeWord = true;
    // node.children[prefix].children[suffix2.join('')] = new Node(suffix2.join(''));
    // node.children[prefix].children[suffix2.join('')].completeWord = true;  



module.exports = Trie;