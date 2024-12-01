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

// No need for remove DarkMode() function anymore