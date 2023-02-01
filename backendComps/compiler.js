const tokenizer = require('./tokenizer');
module.exports = function compiler(input) {
  //1. Lexical Analysis
  //We first need to break the input string down to multiple pieces called "tokens" using a tokenizer. This tokenizer will break the string down to the basic syntax of the language
  const tokens = tokenizer(input);
  //2. Syntactic Analysis
  //3. Transformation
  //4. Code generation
  
  //return  jsCode
  
  return tokens;
}