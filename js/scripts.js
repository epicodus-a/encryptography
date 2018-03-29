// Cryptosquare
// 
/

// A function to remove all non-alphobetical element from a dowcased string
// return a new string with all albetical letters
var alphobeticalOnly = function(aString){
  var patter1 = /[a-zA-Z]+/g;
  return aString.toLowerCase().match(patter1).join("");
}

//  A function to caculate square size as per input length
// length: an integer
// return an array with squer size
var caculateSquareSize = function(length){
  var size = Math.sqrt(length);
  if (Number.isInteger(size)){
    return [size, size];
  }else{
    return [parseInt(size) + 1, parseInt(size)]
  }
}

// A function make a 2D array for a string
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

// A function to output a string by reading down the columns going left to right
// twoDArray: a two Dimention array
// return: an array with elements twisted from a two demention array
var outputArray = function(twoDArray){
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

// Group elements in a array into five length group
// aArray: an array
// return: in groups of five letters
var fiveLetterGroup = function(aArray){
  result = "";
  count = 0;

  for ( var i = 0; i < aArray.length; i++){
    if (i % 5 === 0){
      count += 1;
      result += aArray.slice(i-5, i).join("") + " ";
    }
  }
  if ((count-1)*5 <= aArray.length){
    result += aArray.slice((count-1)*5).join("");
  }
  return result;
}


//////////////////////////////////////////////////////////////////////////////
//user interface logic
$().ready(function(){
  $(".encrypt-form").submit(function(e){
    e.preventDefault();

    var input = $("#string").val();
    if (input){
      var cleanStaring = alphobeticalOnly(input);
      var size = caculateSquareSize(cleanStaring.length);
      var td = twoDArray(cleanStaring, size);
      var pivalArray = outputArray(td);
      var result = fiveLetterGroup(pivalArray);
      $(".output").append("<p class='lead mt-5'>" + result + "</p>");
  }else{
      result = "Please enter something";
      $(".output").append("<p class='lead mt-5'>" + result + "</p>");
  }
});

});
