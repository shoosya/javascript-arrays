/*
Given an array containing the english alphabet, write code that returns an array containing:

* The numbers 0-9 at the beginning of the alphabet (as numbers, not strings)
* An ampersand (&) at the end of the alphabet

*/

function getAlphaNumericAlphabet() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let alphaNumericAlphabet = [];

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  alphaNumericAlphabet.push(...numbers, ...alphabet, "&");

  return alphaNumericAlphabet;
}

module.exports = getAlphaNumericAlphabet;
