/*
Given an array containing the alphanumeric alphabet, write code that returns an array that:

* Removes the numbers 0-9 from the beginning of the alphabet
* Removes the ampersand (&) from the end of the alphabet
* Adds a "ch" between "c" and "d"
* Adds an "ñ" between "n" and "o"
* Adds an "ll" between "l" and "m"

*/

function getSpanishAlphabet() {
  const alphaNumericAlphabet = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
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
    "&",
  ];
  let spanishAlphabet = [];

  alphaNumericAlphabet.splice(0, 10);
  alphaNumericAlphabet.splice(-1, 1);

  spanishAlphabet.push(...alphaNumericAlphabet);
  spanishAlphabet.splice(spanishAlphabet.indexOf("c") + 1, 0, "ch");
  spanishAlphabet.splice(spanishAlphabet.indexOf("n") + 1, 0, "ñ");
  spanishAlphabet.splice(spanishAlphabet.indexOf("l") + 1, 0, "ll");

  return spanishAlphabet;
}

module.exports = getSpanishAlphabet;

/*
You can run tests for this code to check your answers by running `npm run test-3`
*/
