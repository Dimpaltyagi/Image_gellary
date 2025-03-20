function login(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the values entered by the user
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Debugging: Log the input values
    console.log("Email:", email);
    console.log("Password:", password);

    // Check if the email and password match the specified values
    if (email === "dimple999@gmail.com" && password === "dimple@999") {
        console.log("Login successful"); // Debugging log
        // Redirect to index.html in the frontend directory if credentials are correct
        window.location.href = "index.html";
    } else {
        console.log("Login failed"); // Debugging log
        // Show an alert if the credentials are incorrect
        alert("Incorrect email or password. Please try again.");
    }
}
