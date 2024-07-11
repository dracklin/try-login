document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    alert("Username: " + username + "\nPassword: " + password); // Debugging alert

    if (username === "admin" && password === "omar") {
        alert("Login successful! Redirecting..."); // Debugging alert
        window.location.href = "hompage.html"; // Ensure this file exists and is correctly named
    } else {
        alert("Invalid username or password. Please try again.");
    }
});