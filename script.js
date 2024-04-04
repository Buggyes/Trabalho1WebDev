function validateLogin() {
    // Perform login validation here
    // If login is successful, redirect to index.html
    window.location.replace("index.html");
  }
  
  // Add event listener to prevent form submission and call validateLogin function instead
  const form = document.querySelector('.form_container');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateLogin();
  });