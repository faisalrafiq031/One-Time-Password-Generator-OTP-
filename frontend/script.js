let timer = 10; // Starting timer value (in seconds)
let passwordTimer;

document.getElementById('generateBtn').addEventListener('click', function () {
    // Fetch the first password and start the timer when the button is clicked
    fetchPassword();
    startTimer();
    disableButton();
});

// Function to fetch password from the backend
function fetchPassword() {
    fetch('http://127.0.0.1:5000/generate_password')
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
            // Display the password in the 'password' div
            document.getElementById('password').textContent = "Generated Password: " + data.password;
        })
        .catch((error) => {
            console.error('Error generating password:', error);
        });
}

// Function to start the 10-second countdown timer
function startTimer() {
    // Reset timer to 10 seconds whenever the function is called
    timer = 10;

    // Clear any previous interval to avoid multiple timers running
    clearInterval(passwordTimer);

    // Update the timer every second
    passwordTimer = setInterval(function () {
        document.getElementById('timer').textContent = `Next Password in: ${timer} seconds`;

        if (timer === 0) {
            // Once the timer hits 0, fetch a new password and reset the timer
            fetchPassword();
            timer = 10; // Reset the timer to 10 seconds
        } else {
            timer--;
        }
    }, 1000);
}

// Function to disable the button
function disableButton() {
    const button = document.getElementById('generateBtn');
    button.disabled = true;
    button.style.backgroundColor = "#e0e0e0"; // Light gray background to indicate it's disabled
    button.style.cursor = "not-allowed"; // Change the cursor to indicate the button is not clickable
}
