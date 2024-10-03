document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
  
    const name = document.getElementById("nameInput").value;
    document.getElementById("displayName").textContent = name;  // Set name in display
  
    // Show the thank you message
    document.getElementById("thankYouMessage").classList.remove("hidden");
  
    // Optionally, hide the form after submission
    document.getElementById("nameForm").classList.add("hidden");
  });
  