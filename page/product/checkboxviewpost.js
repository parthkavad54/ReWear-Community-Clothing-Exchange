// Store checkbox values and total
const checkboxValues = {};
let total = 0;
// Function to generate a random number between 10 and 30
function getRandomValue() {
  return Math.floor(Math.random() * (30 - 15 + 1)) + 15;
}

// Update total display
function updateTotalDisplay() {
  const totalElement = document.getElementById('total');
  if (totalElement) {
    totalElement.textContent = `Total: ${total}`;
  }
}

// Handle checkbox click
function handleCheckboxClick(event) {
  const checkbox = event.target;
  const id = checkbox.id;

  if (checkbox.checked) {
    const value = getRandomValue();
    checkboxValues[id] = value;
    total += value;
  } else {
    total -= checkboxValues[id] || 0;
    delete checkboxValues[id];
  }

  updateTotalDisplay();
}

// Set up event listeners
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheckboxClick);
  });

  updateTotalDisplay();
});






// Function to push total coins to an external handler
function pushTotalCoins(targetFunction) {
  if (typeof targetFunction === 'function') {
    targetFunction(total);
  } else {
    console.error('Target is not a function');
  }
}


function receiveCoins(coinAmount) {
  console.log("Received coins:", coinAmount);
  // Example: update UI or object
  // someObject.totalCoins = coinAmount;
}

