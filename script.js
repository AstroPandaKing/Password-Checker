function checkPassword() {
  const password = document.getElementById("password").value;
  const passwordText = document.getElementById("PasswordText");
  const inputWrapper = document.querySelector(".input-wrapper");
  const passwordIndicators = document.getElementById("passwordIndicators");
  let strength = "";
  let borderColor = "";

  // Strength checks
  if (password.length < 6) {
    strength = "Too Short";
    passwordText.style.color = "red";
    borderColor = "#ff4d4d"; // Red for weak passwords
  } else if (password.length < 8) {
    strength = "Weak";
    passwordText.style.color = "orange";
    borderColor = "#ffa500"; // Orange for weak passwords
  } else if (password.length > 12) {
    strength = "Too Long";
    passwordText.style.color = "red";
    borderColor = "#ff4d4d"; // Red for weak passwords
  } else if (/^[a-zA-Z]+$/.test(password)) {
    strength = "Medium (Try adding numbers or symbols)";
    passwordText.style.color = "yellow";
    borderColor = "#ffff66"; // Yellow for medium strength
  } else if (/^[a-zA-Z0-9]+$/.test(password)) {
    strength = "Strong (Add symbols for extra security)";
    passwordText.style.color = "lightgreen";
    borderColor = "#32cd32"; // Light green for strong passwords
  } else {
    strength = "Very Strong";
    passwordText.style.color = "green";
    borderColor = "green"; // Bright green for very strong passwords
  }

  // Update the label text with the strength of the password
  passwordText.innerHTML = `Password strength: ${strength}`;

  // Update the CSS variable for the border color
  inputWrapper.style.setProperty("--border-color", borderColor);

  // Check for characters in the password
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Create a visual representation of the password features
  passwordIndicators.innerHTML = `
    <div style="color: ${
      hasUpperCase ? "lightgreen" : "red"
    };">Uppercase Letters: ${hasUpperCase ? "✔️" : "❌"}</div>
    <div style="color: ${
      hasLowerCase ? "lightgreen" : "red"
    };">Lowercase Letters: ${hasLowerCase ? "✔️" : "❌"}</div>
    <div style="color: ${hasNumbers ? "lightgreen" : "red"};">Numbers: ${
    hasNumbers ? "✔️" : "❌"
  }</div>
    <div style="color: ${hasSymbols ? "lightgreen" : "red"};">Symbols: ${
    hasSymbols ? "✔️" : "❌"
  }</div>
  `;
}
