// Add a class to <html> to indicate JS is enabled
document.documentElement.classList.add("js-enabled");

// Contact Form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");

    // Submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        
        // THIS DEMO PART DOESN'T ACTUALLY WORK SORRY
        const url = `https://httpbin.org/post`;

        const confirmSend = confirm("Send the message. Continue?");
        if (confirmSend) {
            window.location.href = url;
        }
    });

    // Allowed character regex for name
    const allowedChars = /^[A-Za-z]*$/;

    function showError(input, message) {
        const errorOutput = document.getElementById(input.id + "-error");
        errorOutput.textContent = message;
        errorOutput.classList.remove("hidden");
        input.classList.add("flash");

        setTimeout(() => {
            errorOutput.classList.add("hidden");
            input.classList.remove("flash");
        }, 2000);
    }

    // Masking input for Name and Comments
    function enforceCharacterRules(event) {
        if (!allowedChars.test(event.target.value)) {
            showError(event.target, "Invalid character entered.");
            event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, "");
        }
    }

    nameInput.addEventListener("input", enforceCharacterRules);

    nameInput.addEventListener("invalid", (e) => {
        showError(nameInput, "Please enter your name.");
    });
});