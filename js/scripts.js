// Cryptosquare
// A classic method for composing secret messages is called a square code.Write a program that outputs the encoded version of a given block of text.

// specs:
// - Write a program that outputs the encoded version of a given block of text.
//  - example input: "Don't compare yourself to others, compare yourself to the person you were yesterday"
//  - example output: "daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput"
//
// - Downcase input string
//  - example input: "Don't compare yourself to others, compare yourself to the person you were yesterday"
//  - example out: "don't compare yourself to others, compare yourself to the person you were yesterday"
//
// - Remove non-albetical element in input string
//  - example input: "Don't compare yourself to others, compare yourself to the person you were yesterday"
//  - example output: "dontcompareyourselftootherscompareyourselftothepersonyouwereyesterday"
//
//
// - Calculate the square size according to the input length
//  - example input: 69
//  - example output: 9 * 8
//
// - Populate the square from left to right
//  - Example input: "Don't compare yourself to others, compare yourself to the person you were yesterday"
//  - Example output:
//  d | o | n | t | c | o | m | p
//  .....
//  e | r | d | a | y |   |   |
//
//
// - Output string from top to bottom in groups of five letters
//  - Example input: "Don't compare yourself to others, compare yourself to the person you were yesterday"
//  - Exampel output: "daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput"
//

// a function to remove all non-alphobetical element from a dowcased string
// return a new string with all albetical letters
var alphobeticalOnly = function(aString){
  var patter1 = /[a-zA-Z]+/g;
  return aString.toLowerCase().match(patter1).join("");
}
// alert(alphobeticalOnly("Don't compare yourself to others, compare yourself to the person you were yesterday"))

// function to caculate square size as per input length
// return an array with squer size
var caculateSquareSize = function(length){
  var size = Math.sqrt(length);
  if (Number.isInteger(size)){
    return [size, size];
  }else{
    return [parseInt(size) + 1, parseInt(size)]
  }
}
// alert(caculateSquareSize(40));

// a function make a 2D array for a string
// aString: a string
// size: size of 2D array
// return: a 2D size array with target size
var twoDArray = function(aString, size){
  var twoDArray = [];
  var oneDArray = [];
  var i = 0;
    // debugger;
    for (var row = 0; row < size[0]; row++){
      for(var col = 0; col < size[1]; col++){
        oneDArray.push(aString[i]);
        i += 1;
      }
      twoDArray.push(oneDArray);
      oneDArray = [];
    }
    i += size[0]*size[1];
  return twoDArray;
}
var aString = "dontcompareyourselftootherscompareyourselftothepersonyouwereyesterday";
var size = [9,8];
var td = twoDArray(aString, size);

// A function to output a string by reading down the columns going left to right

var outputArray = function(twoDArray){
  // alert(twoDArray);
  // debugger;
  var row = twoDArray.length;
  var col = twoDArray[0].length;

  var result = [];

  for (var r = 0; r < col; r ++){
    for (var c = 0; c < row; c ++){
      if(twoDArray[c][r]){
      result.push(twoDArray[c][r]);
      }
    }
  }
  return result;
};
var rArray = outputArray(td);

// in group of five letters
var fiveLetterGroup = function(aArray){
  result = "";
  count = 0;

  for ( var i = 0; i < aArray.length; i++){
    // debugger;
    if (i % 5 === 0){
      count += 1;
      // console.log(count);
      result += aArray.slice(i-5, i).join("") + " ";
      // console.log(result);
    }
  }
  if ((count-1)*5 <= aArray.length){
    result += aArray.slice((count-1)*5).join("");
  }
  return result;
}
alert(fiveLetterGroup(rArray));


//////////////////////////////////////////////////////////////////////////////
