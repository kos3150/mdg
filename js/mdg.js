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

  // Shopping Cart Functionality

  const products = document.querySelectorAll('.product');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.getElementById('itemList1');

  const subtotal = document.getElementById('subtotal');
  const tax = document.getElementById('tax1');
  const shipping = document.getElementById('shipping1');
  const total = document.getElementById('total1');
  const checkoutButton = document.getElementById('checkout1');

  let cart = [];

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
  const product = products[index];
  const productName = product.querySelector('h4').textContent;
  const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

  const existingItem = cart.find(item => item.name === productName);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ 
          name: productName, 
          price: productPrice, 
          quantity: 1 
        });
      }

        updateCart();
        });
      });

      function updateCart() {
        cartItems.innerHTML = '';
        let subtotalAmount = 0;

        cart.forEach(item => {
          const listItem = document.createElement('li');
          li.textContent = `${item.quantity} x ${item.name} - $${item.price * item.quantity}`;
          cartItems.appendChild(li);

          subtotalAmount += item.price * item.quantity;
        });

  const taxAmount = subtotalAmount * 0.8; // Assuming a tax rate of 8%
  const shippingCost = 10; // Assuming a flat shipping cost of $10
  const totalAmount = subtotalAmount + taxAmount + shippingCost;

        subtotal.textContent = `Subtotal: $${subtotalAmount.toFixed(2)}`;
        tax.textContent = `Tax: $${taxAmount.toFixed(2)}`;
        shipping.textContent = `Shipping: $${shippingCost.toFixed(2)}`;

        checkoutButton.disabled = cart.length === 0;
      }

      checkoutButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
      });

      // Contact Form Functionality

  const contactFormm = document.getElementById('contactForm');
  const nameInput = document.getElementById('my-name');
  const emailInput = document.getElementById('my-email');
  const phoneInput = document.getElementById('my-phone');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

      contactFormm.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous error messages
      nameError.textContent = '';
      emailError.textContent = '';
      phoneError.textContent = '';

      // Validate name
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      // Validate email

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }
      
      if (phoneInput.value.length > 0 && !/^\d{3}-\d{3}-\d{4}$/.test(phoneInput.value)) { // Example US phone format
        phoneError.textContent = 'Please enter a valid phone number (e.g., 123-456-7890).';
        isValid = false;
      }

      // If there are errors, prevent form submission

      if (!isValid) {
        event.preventDefault();
      }
      });

      // Add Hover Effects
      // Social Media Functionality
      
  const socialLinks = document.querySelectorAll('footer a');

      socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          link.querySelector('svg').classList.add('hover');
        });
        link.addEventListener('mouseout', () => {
          link.querySelector('svg').classList.remove('hover');
        });
      });
