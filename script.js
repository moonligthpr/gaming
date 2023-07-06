// Define an array of prizes
var prizes = [
  "Prize 1",
  "Prize 2",
  "Prize 3",
  "Prize 4",
  "Prize 5",
  "Prize 6",
  "Prize 7",
  "Prize 8",
];

// Function to spin the wheel
function spinWheel() {
  // Disable the spin button to prevent multiple spins
  document.getElementById("spinButton").disabled = true;

  // Get a random prize index
  var randomIndex = Math.floor(Math.random() * prizes.length);

  // Get the prize at the random index
  var prize = prizes[randomIndex];

  // Display the prize
  document.getElementById("result").innerHTML = "Congratulations! You won: " + prize;

  // Enable the spin button again after a delay
  setTimeout(function() {
    document.getElementById("spinButton").disabled = false;
  }, 2000); // Enable after 2 seconds
}
