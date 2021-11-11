/**
 * 
 * 
 * @param {string} word
 * 
 */

 function createMatcherRegex(word){
   let newWord = "";
   for (i = 0; i<word.length; i++){
       newWord += "("+word[i]+"+)";
   }
   
   return "\\b"+newWord+"\\b";
}