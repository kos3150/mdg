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