<script>
    // Add an event listener to the form for the 'submit' event
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const terms = document.getElementById('terms').checked;
        const messageDiv = document.getElementById('message');

        // Check if all required fields are filled
        if (name && email && password && terms) {
            // Display a success message if all fields are filled
            messageDiv.innerHTML = "<p style='color:green;'>Submitted successfully ✅</p>";
        } else {
            // Display an error message if any field is missing or checkbox is not checked
            messageDiv.innerHTML = "<p style='color:red;'>Not successfully submitted ❌</p>";
        }
    });
</script>
