/*
Given an array containing the english alphabet, write code that returns an array containing only the vowels (including "y").

Note:

* "a" is the first letter
* "e" is the fifth letter
* "i" is the ninth letter
* "o" is the 12th to last letter
* "u" is the 6th to last letter
* "y" is the second to last letter

*/

function getVowels() {
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
  let vowels;

  vowels = alphabet.filter(
    (letter) =>
      alphabet.indexOf(letter) === 0 ||
      alphabet.indexOf(letter) === 4 ||
      alphabet.indexOf(letter) === 8 ||
      alphabet.indexOf(letter) === alphabet.length - 12 ||
      alphabet.indexOf(letter) === alphabet.length - 6 ||
      alphabet.indexOf(letter) === alphabet.length - 2
  );

  return vowels;
}

module.exports = getVowels;
