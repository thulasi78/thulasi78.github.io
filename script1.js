    // Initialize EmailJS
    document.addEventListener("DOMContentLoaded", function() {
        emailjs.init("h6yp4HLKH0oST7fHm"); // Replace with your EmailJS public key
    });

    function sendMail() {
        // Retrieve input values
        var params = {
            name: document.getElementById("inputext").value,
            email: document.getElementById("inputemail").value,
            message: document.getElementById("area").value
        };

        // Check for missing fields
        if (!params.name || !params.email || !params.message) {
            alert("Please fill in all fields.");
            return;
        }

        const serviceID = "service_xtafurq"; // Replace with your actual service ID
        const templateID = "template_z82dqvi"; // Replace with your actual template ID

        // Send email
        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                alert("Your message sent successfully");
                // Clear form fields
                document.getElementById("inputext").value = "";
                document.getElementById("inputemail").value = "";
                document.getElementById("area").value = "";
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                alert("Failed to send message. Please try again.");
            });
    }
