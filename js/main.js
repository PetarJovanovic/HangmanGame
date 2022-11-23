import data from './data.js';

// Choosing random word
const rnd = Math.floor(Math.random() * data.words.length);
const randomWord = data.words[rnd];

// Spliting randomWord into array and creating Hangman array
let randomWordArray = randomWord.split('');
let displayWord = new Array(randomWordArray.length).fill('_');

// Declaring global variables
let lettersLeft = displayWord.length;
let attemptsUsed = 0;

// Setting result to starting position
displayWord.forEach(e => {
  result.innerHTML += `${e} `;
});

// Hangman function
const hangman = inputLetter => {
  const letter = inputLetter;

  if (!data.letters.includes(letter)) {
    console.log('Letter already used! Try again.');
  } else {
    randomWordArray.forEach((e, i) => {
      if (letter === e) {
        displayWord[i] = letter;
        lettersLeft--;
      }
    });

    attemptsUsed++;
    lettersUsed(letter);
    printUsedLetters(letter);

    printToScreen();
    if (lettersLeft === 0) {
      const final = document.getElementById('final_message');
      final.innerHTML = `Congratulations! You needed ${attemptsUsed} attempts`;
    }
  }
};

// Guess a whole word
const guessWord = inputWord => {
  const word = inputWord;
  const final = document.getElementById('final_message');

  attemptsUsed++;

  if (word === randomWord) {
    displayWord = randomWordArray;

    printToScreen();

    final.innerHTML = `Congratulations! You needed ${attemptsUsed} attempts`;
  } else {
    final.innerHTML = "It's not a correct word";
  }
};

// Removing used letters function
const lettersUsed = letter => {
  const letterToBeRemoved = data.letters.find(e => e === letter);
  const letterInxed = data.letters.indexOf(letterToBeRemoved);
  data.letters.splice(letterInxed, 1);
};

// Prints used letters to html
const printUsedLetters = letter => {
  const usedLetter = document.createElement('p');

  usedLetter.classList.add('used__letter');
  usedLetter.innerHTML = letter;

  document.getElementById('used_letters').appendChild(usedLetter);
};

// Printing result on screen
const printToScreen = () => {
  const result = document.getElementById('result');

  result.innerHTML = '';

  displayWord.forEach(e => {
    result.innerHTML += `${e} `;
  });
};

// Getting value from single letter input
const input = document.getElementById('input');
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    hangman(input.value);
    document.getElementById('input').value = '';
  }
});

// Getting value from whole word input
const inputWord = document.getElementById('inputWord');
inputWord.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    guessWord(inputWord.value);
    document.getElementById('inputWord').value = '';
  }
});
