  // validationScript.js

//  Retrieve the form and input field
const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

// Create a message element for feedback
const messageBox = document.createElement("p");
messageBox.id = "messageBox";
messageBox.style.fontWeight = "bold";
form.appendChild(messageBox);

//  Add event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual submission

  const inputValue = inputField.value.trim();

  //  Regular expression for alphanumeric input
  const alphaNumRegex = /^[a-zA-Z0-9]+$/;

  // Validate input
  if (!alphaNumRegex.test(inputValue)) {
    //  Invalid input: show error
    messageBox.textContent = "Error: Please enter only letters and numbers.";
    messageBox.style.color = "red";
  } else {
    //  Valid input: show confirmation
    messageBox.textContent = "Success! Your input has been accepted.";
    messageBox.style.color = "green";

    
  }
});