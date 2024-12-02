// Kim Smock JavaScript mdg.js
// <script src="js/mdg.js"></script>
// Syntax: add "use strict"; at the top of a script or function.
"use strict";
console.log("Strict mode is enabled");
function myFunction() {
    "use strict";
    let x = 3.14;
    console.log(x);
}

// Add JavaScript Obfuscator to protect your code below: Remove the following line to enable obfuscation before submitting your JS file for grading.

function NewObject(prefix)
{
    var count=0;
    this.SayHello=function(msg)
    {
        count++;
        alert(prefix+msg);
    }
    this.GetCount=function()
    {
        return count;
    }
}

var obj=new NewObject("Message : ");
obj.SayHello("You are welcome.");

// End of JavaScript Obfuscator
						
// Use document.getElementById("id").innerHTML to select the element with the ID dark-mode-toggle.
const darkModeToggle = document.getElementById('dark-mode-toggle');
const background = document.querySelector('.background');

darkModeToggle.addEventListener('click', () => {
  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  if (isDarkModeEnabled) {
     disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  background.style.display = 'block';
  localStorage.setItem('dark-mode', 'enabled');
}
// The disableDarkMode function removes the dark-mode class from the body element and removes the dark-mode key from localStorage.
const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.removeItem('dark-Mode');
};

darkModeToggle.addEventListener('click', () => {
  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  if (isDarkModeEnabled) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  background.style.display = 'block'; // Show the background overlay
  localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  background.style.display = 'none'; // Hide the background overlay
  localStorage.removeItem('dark-mode'); // Corrected ('dark-Mode to dark-mode')
}

const darkModePreference = localStorage.getItem('dark-mode');
if (darkModePreference === 'enabled') {
  enableDarkMode();
}

// No need for remove DarkMode() function

// Product sections and buttons
const product1 = document.getElementById('product1');
const product2 = document.getElementById('product2');
const product3 = document.getElementById('product3');

const product4 = document.getElementById('product4');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// Function to show a specific product and hide the others
function showProduct(productToShow) {
  product1.classList.add('hiddenItem');
  product2.classList.add('hiddenItem');
  product3.classList.add('hiddenItem');
  product4.classList.add('hiddenItem');

  productToShow.classLIst.remove('hiddenItem');
  productToShow.classList.add('currentItem');
}

// Event listeners for the buttons

btn1.addEventListener('click', () => showProduct(product1));
btn2.addEventListener('click', () => showProduct(product2));
btn3.addEventListener('click', () => showProduct(product3));
btn4.addEventListener('click', () => showProduct(product4));

// Show the first product

showProduct(product1);

const guessForm1 = document.getElementById('guessGame');
const guessInput1 = document.getElementById('numGuess');
const gameOutput1 = document.getElementById('gameOutput');

guessForm1.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const userGuess = parseInt(guessInput1.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    gameOutput1.textContent = 'Please enter a valid number between 1 and 10.';
    return;
  }
  
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (userGuess === randomNumber) {
    gameOutput1.textContent = `Congratulations! You guessed the number ${randomNumber}.`;
  } else {
    gameOutput1.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`;
  }
  
  guessInput1.value = '';
});

// Guessing Game 2

const guessForm2 = document.getElementById('guessGame2');
const guessInput2 = document.getElementById('numGuess2');
const userNumDisplay = document.getElementById('userNum');
const randomNumDisplay = document.getElementById('randomNum');
const gameMessage = document.getElementById('gameMessage');

guessForm2.addEventListener('submit', (event) => {
  event.preventDefault();

  const userGuess = parseInt(guessInput2.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    gameMessage.textContent = 'Please enter a valid number between 1 and 10.';
    return;
  }

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  userNumDisplay.textContent = `Your guess: ${userGuess}`;
  randomNumDisplay.textContent = `Winning Number: ${randomNumber}`;

  if (userGuess === randomNumber) {
    gameMessage.textContent = 'Congratulations! You guessed the number.';
  } else {
    gameMessage.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`; 
  }

  guessInput2.value = ''; 
  });