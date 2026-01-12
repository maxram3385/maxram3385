// Get the form element by its ID
const myForm = document.getElementById("myForm");

// Add an event listener for the 'submit' event
myForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior (page reload)
  event.preventDefault();

  // Get the value from the name input field
  const nameInput = document.getElementById("name");
  const userName = nameInput.value;

  // Get the message display area
  const messageArea = document.getElementById("messageArea");

  // Display the message
  if (userName.trim() !== "") {
    messageArea.style.color = "#b6c2d6";
    messageArea.textContent = `Thank you, ${userName}! Your form has been submitted successfully.`;
    nameInput.value = "";
  } else {
    messageArea.style.color = "red";
    messageArea.textContent = "Please enter your name before submitting.";
  }
});
