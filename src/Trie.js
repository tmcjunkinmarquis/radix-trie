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
        let holdingArray = []
        // need to loop over keys of children of currentNode to match with word
        for (let i = 0; i < kidLetters.length; i++){
          if(kidLetters[i] === wordLetters[i]){
            letterCounter++
            holdingArray.push(kidLetters[i]) 
          }
        }
        const prefix = holdingArray.join('')
        const kidMatch = currentNodeKids.filter(kid => kid.includes(prefix));
        const parsedKidNode = new Node(prefix)
        delete currentNode.children[kidMatch]
        currentNode.children[prefix] = parsedKidNode
        let suffix1 = wordLetters.slice(letterCounter)
        let suffix2 = kidLetters.slice(letterCounter)
        currentNode.children[prefix].children[suffix1.join('')] = new Node(suffix1.join(''))
        currentNode.children[prefix].children[suffix1.join('')].completeWord = true
        currentNode.children[prefix].children[suffix2.join('')] = new Node(suffix2.join(''))
        currentNode.children[prefix].children[suffix2.join('')].completeWord = true    
      })
      
      const keys = Object.keys(currentNode.children)
      // console.log(keys)
      // currentNode = this.currentNode.children;
      
    }
      
//         let currentNode = this.currentNode.children;
//         let lettersArray = [...word]; // ['h', 'o', 'w','s', 'e','r']
        
//         if(currentNode.data[0] !== lettersArray[0]) {
//           let childrenObject = currentNode.children;
//           let newNode = new Node(word);
          
//           currentNode.children = Object.assign({}, childrenObject, newNode);
//           // currentNode.children = new Node(word);
//         } else {
//             let letterCounter = 0;
//             let tempData = currentNode.data;
            
//             currentNode.data = [];
//             for (let i = 0; i < lettersArray.length; i++) {
//               while(lettersArray[i] === tempData[i]) {
//                 currentNode.data.push(lettersArray[i]);
//                 let prefix = currentNode.data.join('');
//                 let childrenObject = currentNode.children;
                
//                 letterCounter++;
//                 }
//               }
//               currentNode.name = prefix
//               let tempDataSuffix = tempData.slice(letterCounter)
//               let lettersArraySuffix = lettersArray.slice(letterCounter)
//               let tDsuffNode = new Node(tempDataSuffix);
//               let lAsuffNode = new Node(lettersArraySuffix);
              
//               currentNode.children = Object.assign({}, childrenObject, tDsuffNode, lAsuffNode);
//               if((letterCounter + 1) === lettersArray.length) {
//                 currentNode.children[prefix].EOW = true; 
//               }
//         }
//     }
  }

  makeArootWithFirstChild(firstWord, currentNode) {
    currentNode.children[firstWord] = new Node(firstWord);
    currentNode.children[firstWord].completeWord = true
    return currentNode
  }

  


}


module.exports = Trie;