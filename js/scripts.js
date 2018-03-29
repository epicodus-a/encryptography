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
