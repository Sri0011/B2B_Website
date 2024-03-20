document.getElementById("instructorForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    if (!nameInput.value) {
        alert("Please fill in the Name field.");
        event.preventDefault(); // Prevent form submission
    }
});
