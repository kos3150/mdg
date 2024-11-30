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

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'enabled');
};
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

// Check for dark mode preference in localStorage on page load
const darkModePreference = localStorage.getItem('dark-mode');
if (darkModePreference === 'enabled') {
  enableDarkMode();
}

function removeDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.style.display = 'none';
}
removeDarkMode();
function addDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.style.display = 'block';
}

