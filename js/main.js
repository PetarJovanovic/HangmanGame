import data from './data.js';

// Choosing random word
const rnd = Math.floor(Math.random() * data.words.length);
const randomWord = data.words[rnd];

// Spliting randomWord into array and creating Hangman array
const randomWordArray = randomWord.split('');
const displayWord = new Array(randomWordArray.length).fill('_');

// Declaring global variables
let lettersLeft = displayWord.length;
let attemptsUsed = 0;

// Hangman function
const hangman = () => {
  const letter = prompt('Choose a letter').toLowerCase();

  if (!data.letters.includes(letter)) {
    console.log('Letter already used! Try again.');
    hangman();
  } else {
    randomWordArray.forEach((e, i) => {
      if (letter === e) {
        displayWord[i] = letter;
        lettersLeft--;
      }
    });
    attemptsUsed++;
    lettersUsed(letter);
    console.log(displayWord);
  }
};

// Removing used letters function
const lettersUsed = letter => {
  const letterToBeRemoved = data.letters.find(e => e === letter);
  const letterInxed = data.letters.indexOf(letterToBeRemoved);
  data.letters.splice(letterInxed, 1);
};

// Calling Hangman function
while (lettersLeft > 0) {
  hangman();
}

console.log(`Congratulations! You needed ${attemptsUsed} attempts`);
