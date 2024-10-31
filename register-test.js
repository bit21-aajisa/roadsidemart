function registerUser() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const validationMessage = document.getElementById('validationMessage');

    // Clear any previous messages
    validationMessage.style.display = 'none';
    validationMessage.textContent = '';

    // Validation checks
    if (!name || !email || !password || !confirmPassword) {
        showMessage("Please fill in all fields.");
        return;
    }
    if (!validateEmail(email)) {
        showMessage("Please enter a valid email address.");
        return;
    }
    if (password.length < 8) {
        showMessage("Password should be at least 8 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        showMessage("Passwords do not match.");
        return;
    }

    // Store user data in localStorage as a mock database
    const user = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    // Show success message and redirect to login page
    showMessage("Registration successful! Redirecting to Login page...", "success");

    setTimeout(() => {
        window.location.href = "login-test.html"; // Redirect to login page
    }, 2000);
}

function showMessage(message, type = "error") {
    const validationMessage = document.getElementById('validationMessage');
    validationMessage.textContent = message;
    validationMessage.style.display = 'block';
    validationMessage.style.color = type === "success" ? "#28a745" : "#d9534f"; // Green for success, red for error
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}