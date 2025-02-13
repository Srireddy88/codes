document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
});

