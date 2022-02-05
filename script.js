// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Tunde Ojebisi" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbiscuit
let cc = 0      // Chocolate Candy
let sugar = 0   // Sugar Cronut

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gingerAdd = document.getElementById('add-gb');
gingerMinus = document.getElementById('minus-gb');

candyAdd = document.getElementById('add-cc');
candyMinus = document.getElementById('minus-cc');

sugarAdd = document.getElementById('add-sugar');
sugarMinus = document.getElementById('minus-sugar');

gingerAdd.addEventListener('click', function() {
  gb++;
  document.getElementById('qty-gb').textContent = gb;
  document.getElementById('qty-total').textContent = gb + cc + sugar;
})

gingerMinus.addEventListener('click', function() {
  gb--;
  document.getElementById('qty-gb').textContent = gb;
   document.getElementById('qty-total').textContent = gb + cc + sugar;
})

candyAdd.addEventListener('click', function() {
  cc++;
  document.getElementById('qty-cc').textContent = cc;
   document.getElementById('qty-total').textContent = gb + cc + sugar
})

candyMinus.addEventListener('click', function() {
  cc--;
  document.getElementById('qty-cc').textContent = cc;
   document.getElementById('qty-total').textContent = gb + cc + sugar
})

sugarAdd.addEventListener('click', function() {
  sugar++;
  document.getElementById('qty-sugar').textContent = sugar;
   document.getElementById('qty-total').textContent = gb + cc + sugar
})

sugarMinus.addEventListener('click', function() {
  sugar--;
  document.getElementById('qty-sugar').textContent = sugar;
   document.getElementById('qty-total').textContent = gb + cc + sugar
})
// TODO: Hook up event listeners for the rest of the buttons