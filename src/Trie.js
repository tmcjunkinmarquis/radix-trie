const Node = require('./Node.js');
// import Node from './Node'
class Trie {
  
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0; 
  }
  
  insert(word, node) { 
    let currentNode = this.rootNode;
    const matchZero = (word, node)=>{
      node.children[word] = new Node(word);
      node.children[word].completeWord = true; 
    };
    if(!Object.keys(currentNode.children).length) {
      console.log(word, 'match 0');
      return matchZero(word, currentNode);   
    }

    let resultMatchOne = this.findMatchOne(currentNode, word);
    console.log(word, 'match 1:', resultMatchOne);

    let resultMatchTwo = this.findMatchTwo(currentNode, word);
    console.log(word, 'match 2:', resultMatchTwo);


    this.determineActionOne(currentNode, word, resultMatchOne);
    this.determineActionTwo(currentNode, word, resultMatchTwo, );
  }

  findMatchTwo(node, word) { 
    const wordLetters = [...word];
    const nodeKids = Object.keys(node.children);
    let result;
    let childMatch;
    const prefix = [];

    const matchTypeTwo = ()=>{
      
      nodeKids.forEach((kid)=>{
        for (let i=0; i<kid.length; i++)
          if (word[i] === kid[i]){
            let match = word[i];
            if (!prefix.includes(match)){
              prefix.push(match);
            }
          }
      });

      

      
      if(prefix.length) {
        return result = true;
      }
    };
    childMatch = nodeKids.find(kid=>{
      return kid.startsWith(prefix.join('')) 
    })
    
    matchTypeTwo();
    return [result, prefix, childMatch];
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

  determineActionOne(node, word, resultMatchOne) {
    if(resultMatchOne){
      node.children[word] = new Node(word);
      node.children[word].completeWord = true;
    }
  }
  determineActionTwo(node, word, resultMatchTwo) {
    const prefix = resultMatchTwo[1].join('');
    const childMatch = resultMatchTwo[2];
    if(resultMatchTwo[0]) {
          //1. make a replacement node with prefix
      const replacementNode = new Node(prefix);
          //2. put the currentNode children of child that starts with prefix in a basket
      let basket;
      const arr = Object.keys(node.children[childMatch].children)
      basket = arr.reduce((acc, child)=>{    
        acc = Object.assign({}, node.children[childMatch].children[child]);
        return acc;
      }, {})
         
          //3. split the child that starts with the prefix and get the childSuffix and make a new Node
      const index = prefix.length;
      const childSuffix = childMatch.slice(index);
      let childSuffixNode = new Node(childSuffix);
      childSuffixNode.completeWord = true;    
          //4. split the insertion word after the prefix and get the wordSuffix and make a new Node
      const wordSuffix = word.slice(index);
      let wordSuffixNode = new Node(wordSuffix);
      wordSuffixNode.completeWord = true;   
          //5. if index[0] of childSuffix does not match the index[0] of wordSuffix, assign the basket object to the childSuffix node as children
          
      if(childSuffix[0]!==wordSuffix[0]){
        childSuffixNode.children = Object.assign({}, basket)
      }
          //5.5  !!! if 5 is a match, fucked!! _________________________!!!!!

          //6. delete the child that is the childMatch
      delete node.children[childMatch]; 
                
          //7. assign replacement node as child of current node
      node.children[prefix] = replacementNode;

          //8. assign childSuffix node as child of replacement node
      node.children[prefix].children[childSuffix] = childSuffixNode;
     
          //9. assign wordSuffix node as child of replacement node
      node.children[prefix].children[wordSuffix] = wordSuffixNode;
      console.log('here',node.children[prefix].children[wordSuffix])    
    }
      

      
      // node.children[prefix] = parsedKidNode;
      // const suffix1 = wordLetters.slice(letterCounter);
      // const suffix2 = kidLetters.slice(letterCounter);
      // node.children[prefix].children[suffix1.join('')] = new Node(suffix1.join(''));
      // node.children[prefix].children[suffix1.join('')].completeWord = true;
      // node.children[prefix].children[suffix2.join('')] = new Node(suffix2.join(''));
      // node.children[prefix].children[suffix2.join('')].completeWord = true;  
    }
  

}

module.exports = Trie;