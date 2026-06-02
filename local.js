// Wait for DOM to be ready
window.onload = () => {
    // Check for saved name on load
    const savedUser = localStorage.getItem("userName");
    if (savedUser) {
        document.getElementById("output").textContent = `Hello ${savedUser}`;
    }

    // Attach event listeners
    document.getElementById("btn").addEventListener("click", saveData);
    document.getElementById("btn1").addEventListener("click", clearData);
};

function saveData() {
    const inputValue = document.getElementById("nameInput").value;
    if (inputValue.trim() !== "") {
        localStorage.setItem("userName", inputValue);
        document.getElementById("output").textContent = `Hello ${inputValue}`;
        alert("Data saved successfully!");
    } else {
        alert("Please enter a name to save!");
    }
}

function clearData() {
    localStorage.removeItem("userName");
    document.getElementById("output").textContent = "No saved data yet.";
    document.getElementById("nameInput").value = "";
    alert("Data cleared successfully!");
}

// Optional: define submitForm() if you keep the Submit button
function submitForm() {
    alert("Submit button clicked – you can add your own logic here.");
}