// Array to store signup information
var users = [];

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;
  // Perform login validation
  if (validateLogin(username, password)) {
    redirectToAccountPage(username);
  } else {
    alert("Invalid username or password");
  }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("signup-username").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  // Perform signup validation
  if (validateSignup(username, email, password)) {
    // Store signup information
    users.push({
      username: username,
      email: email,
      password: password
    });
    createAccountPage(username);
    redirectToAccountPage(username);
  } else {
    alert("Signup failed. Please try again.");
  }
});

function validateLogin(username, password) {
  // Perform login validation
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true;
    }
  }
  return false;
}

function validateSignup(username, email, password) {
  // Perform signup validation
  if (username && email && password) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        alert("Username already exists. Please choose a different username.");
        return false;
      }
    }
    return true;
  } else {
    alert("Please fill in all the fields.");
    return false;
  }
}

function createAccountPage(username) {
  // Create a unique account page for the user
  var accountPage = document.createElement("div");
  accountPage.innerHTML = "<h1>Welcome, " + username + "!</h1>";
  document.body.appendChild(accountPage);
}

function redirectToAccountPage(username) {
  // Redirect the user to their account page
  window.location.href = "account.html?username=" + encodeURIComponent(username);
}