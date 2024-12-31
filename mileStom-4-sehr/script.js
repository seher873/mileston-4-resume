// script.ts
// Function to initialize the application
function init() {
    var generateBtn = document.getElementById("generateBtn");
    if (generateBtn) {
        generateBtn.addEventListener("click", generateResume);
    }
}
// Function to generate the resume
function generateResume() {
    // Get form inputs
    var nameInput = document.getElementById("nameInput").value;
    var profileInput = document.getElementById("profileInput").value;
    var phoneInput = document.getElementById("phoneInput").value;
    var emailInput = document.getElementById("emailInput").value;
    var addressInput = document.getElementById("addressInput").value;
    var educationInput = document.getElementById("educationInput").value;
    var experienceInput = document.getElementById("experienceInput").value;
    var skillsInput = document.getElementById("skillsInput").value;
    // Update resume fields dynamically
    var nameField = document.getElementById("name");
    var profileDescField = document.getElementById("profileDesc");
    var phoneField = document.getElementById("phone");
    var emailField = document.getElementById("email");
    var addressField = document.getElementById("address");
    var educationField = document.getElementById("education");
    var experienceField = document.getElementById("experience");
    var skillsField = document.getElementById("skills");
    if (nameField)
        nameField.textContent = nameInput || "Your Name";
    if (profileDescField)
        profileDescField.textContent = profileInput || "Your profile description will appear here.";
    if (phoneField)
        phoneField.textContent = phoneInput || "Your phone";
    if (emailField)
        emailField.textContent = emailInput || "Your email";
    if (addressField)
        addressField.textContent = addressInput || "Your address";
    if (educationField)
        educationField.textContent = educationInput || "Your education details";
    if (experienceField)
        experienceField.textContent = experienceInput || "Your experience";
    // Clear existing skills and add new ones dynamically
    if (skillsField) {
        skillsField.innerHTML = ""; // Clear the current list
        var skillsArray = skillsInput.split(",").map(function (skill) { return skill.trim(); });
        skillsArray.forEach(function (skill) {
            if (skill) {
                var li = document.createElement("li");
                li.textContent = skill;
                skillsField.appendChild(li);
            }
        });
    }
}
// Initialize the application on DOM content loaded
document.addEventListener("DOMContentLoaded", init);
