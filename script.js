document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // Handle login process here (e.g., API call to backend)
    console.log(`Login attempted with: ${email} and password: ${password}`);
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // Handle signup process here (e.g., API call to backend)
    console.log(`Sign up attempted with: ${username}, ${email}, and password`);
});
