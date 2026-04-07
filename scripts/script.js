// Function to get the price of staying
function calculateCost() {
  // Gets the room price with the value set in the html
  let roomPrice = parseFloat(document.getElementById("room").value);
  // Gets the number of nights user inputed
  let nights = parseInt(document.getElementById("nights").value);
  // Creates the total
  let total = roomPrice * nights;
  
  // Adds what the user clicks
  if (document.getElementById("breakfast").checked) {
    total += 10;
  }
  if (document.getElementById("parking").checked) {
    total += 5;
  }
  if (document.getElementById("spa").checked) {
    total += 20;
  }
  if (document.getElementById("tour").checked) {
    total += 15;
  }
  // Display the results
  document.getElementById("result").textContent =
    "Estimated Total Cost: $" + total.toFixed(2);
}