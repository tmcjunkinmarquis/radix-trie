const Node = require('./Node.js');
// import Node from './Node'
class Trie {
  
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0; 
  }
  
  insert(word) {
    let currentNode = this.rootNode;

    if(!Object.keys(currentNode.children).length) {
      return this.matchZero(word, currentNode);   
    }


    
    let match = this.findTheMatch(currentNode, word);

    if(match === ['matchTypeOne']){
      console.log(match)
      this.matchOne(currentNode, word);
    } else if (match === 'matchTypeTwo') {
      console.log('stil need splits');
      this.matchTwo(currentNode, word,);
    } else {
      this.matchThree(currentNode, word);
    }   
  }

  matchZero(word, node) {
    node.children[word] = new Node(word);
    node.children[word].completeWord = true; 
  }

  findTheMatch(node, word) {
    const wordLetters = [...word]
    const nodeKids = Object.keys(node.children);
    
    
    const matchTypeOne = ((node, word) => {
      if (kidLetters[0] !== wordLetters[0]) {
        console.log('true')
        return true
      }else{}
        return false
      })();

    if (matchTypeOne === true) {this.matchOne()}

    const matchTypeTwo = ((node, word) => {
      let letterCounter = 0;
      const holdingArray = [];
      const kidLetters = [...kid];

      nodeKids.forEach(kid=>{
        for (let i = 0; i < kidLetters.length; i++){
          if(kidLetters[i] === wordLetters[i]){
            letterCounter++;
            holdingArray.push(kidLetters[i]); 
          }
        }
      });
      const matchingPrefix = holdingArray.join('');
      return [letterCounter, matchingPrefix]
    })();

    const matchTypeThree = (() => {
      if (condition)
        return 5
      else
        return 10
    })();



    

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

  }
    
    
   
  matchOne(node, word) {
    node.children[word] = new Node(word);
    node.children[word].completeWord = true;
  }

  // matchTwo(word) {
    
  //       

  //   
  // }

  matchThree(node, word) {

  }

}

module.exports = Trie;