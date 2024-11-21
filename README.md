# One-Time Password (OTP) Generator with Auto-Renewal

Welcome to the One-Time Password (OTP) Generator project! This application generates secure, random 6-digit passwords that are automatically refreshed every 10 seconds. The project combines the power of a Flask backend and a user-friendly frontend built with HTML, CSS, and JavaScript.

# Table of Contents

<ul>
<li>Project Overview</li>
<li>Features</li>
<li>Technologies Used</li>
<li>How It Works</li>
<li>Getting Started</li>
<li>Usage</li>
<li>Screenshots</li>
<li>Future Enhancements</li>
<li>Contributing</li>
<li>License</li>
</ul>

# Project Overview

The OTP Generator is a simple yet efficient project designed to generate secure passwords. The project ensures seamless automation by refreshing the password every 10 seconds after an initial click. The UI is clean and intuitive, making it easy for users to interact with the app.

# Features
<li><b>Password Generation:</b> Generates a random 6-digit numeric password.</li>
<li><b>Auto-Refresh:</b> Automatically refreshes the password every 10 seconds after the first click.</li>
<li><b>User-Friendly UI:</b> A responsive interface designed with a clean layout and interactive timer.</li>
<li><b>Real-Time Timer:</b> Displays the time left before the next password is generated.</li>
<li><b>Cross-Platform:</b> Runs smoothly in any modern browser.</li>
<li><b>Secure:</b> Uses server-side logic to ensure password uniqueness and security.</li>

# Technologies Used

## Backend:
Python (Flask)

## Frontend:
<b>HTML</b> <br>
<b>CSS</b> <br>
<b>JavaScript (Vanilla)</b>

# Other Tools: 

Fetch API for communication between frontend and backend.

# How It Works

## Initial Password Generation:

<li> The user clicks the "Generate Password" button to request a password from the Flask server.</li>
<li>The button becomes disabled after the first click to ensure that passwords are only generated via the timer afterward.</li>

## Automatic Password Refresh:

<li>A 10-second timer starts after the first password is generated.</li>
<li>Once the timer hits zero, the app sends an automated request to the backend to fetch a new password.</li>
<li>The process continues until the application is closed.</li>

## Backend Logic:

The Flask server generates a secure 6-digit password using Python’s random module and responds to the frontend's requests with the generated password.

# Getting Started

Follow these steps to set up and run the project on your local machine:

1. Prerequisites
2. Python 3.x installed on your system.
3. A modern web browser (Chrome, Firefox, etc.).
4. Basic knowledge of Python and HTML (optional but helpful).

# Installation Steps

Clone the Repository:
```bash
git clone https://github.com/faisalrafiq031/One-Time-Password-Generator-OTP-.git
cd One-Time-Password-Generator-OTP-
```

# Set Up the Backend:

Navigate to the backend folder:

```bash 
cd backend
``` 

## Install the required Python libraries:

<code>pip install flask</code>

# Run the Flask server:

<code>python app.py</code>

The backend will start running on http://127.0.0.1:5000.

# Set Up the Frontend:

Open the frontend/index.html file in your browser to view the application.

# Usage

<b>Start the Flask server:</b> Run the backend with python app.py from the backend folder.

# Open the Frontend:

Open index.html in any browser. <br>
Click the "Generate Password" button to generate the first password.

# Automatic Updates:

The timer starts immediately after the first password is generated. <br>
Passwords are refreshed every 10 seconds automatically without requiring any further user action.<br>

# Screenshots

<li>Initial View</li>
<li>Password Generated</li>
<li>Auto-Refreshing Timer</li>

# License
This project is licensed under the <a href="./LICENSE">>MIT License.</a>
