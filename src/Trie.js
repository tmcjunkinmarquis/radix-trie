const Node = require('./Node.js');
// import Node from './Node'
class Trie {
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0; 
  }
  
  insert(word) {
    let currentNode = this.rootNode;
    
//     // does the root have any children? if not, make the word the child of the currrent node
    
    if(!Object.keys(currentNode.children).length) {
      this.makeArootWithFirstChild(word, currentNode)
      
    } else {
      
      const currentNodeKids = Object.keys(currentNode.children)
      currentNodeKids.forEach(kid=>{
        const kidLetters = [...kid]
        const wordLetters = [...word]
        let letterCounter = 0;
        const holdingArray = []
        // need to loop over keys of children of currentNode to match with word
        for (let i = 0; i < kidLetters.length; i++){
          if(kidLetters[i] === wordLetters[i]){
            letterCounter++
            holdingArray.push(kidLetters[i]) 
          } else {
            currentNode.children[word] = new Node(word)
            currentNode.children[word].completeWord = true
          }
        }
        const prefix = holdingArray.join('')
        const kidMatch = currentNodeKids.filter(kid => kid.includes(prefix));
        const parsedKidNode = new Node(prefix)
        delete currentNode.children[kidMatch]
        currentNode.children[prefix] = parsedKidNode
        const suffix1 = wordLetters.slice(letterCounter)
        const suffix2 = kidLetters.slice(letterCounter)
        currentNode.children[prefix].children[suffix1.join('')] = new Node(suffix1.join(''))
        currentNode.children[prefix].children[suffix1.join('')].completeWord = true
        currentNode.children[prefix].children[suffix2.join('')] = new Node(suffix2.join(''))
        currentNode.children[prefix].children[suffix2.join('')].completeWord = true    
      })
      
      const keys = Object.keys(currentNode.children)
    }
      
  }

  makeArootWithFirstChild(firstWord, currentNode) {
    currentNode.children[firstWord] = new Node(firstWord);
    currentNode.children[firstWord].completeWord = true
    return currentNode
  }

}

module.exports = Trie;