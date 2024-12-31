// script.ts
// Function to initialize the application
function init() {
  const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;

  if (generateBtn) {
      generateBtn.addEventListener("click", generateResume);
  }
}

// Function to generate the resume
function generateResume() {
  // Get form inputs
  const nameInput = (document.getElementById("nameInput") as HTMLInputElement).value;
  const profileInput = (document.getElementById("profileInput") as HTMLTextAreaElement).value;
  const phoneInput = (document.getElementById("phoneInput") as HTMLInputElement).value;
  const emailInput = (document.getElementById("emailInput") as HTMLInputElement).value;
  const addressInput = (document.getElementById("addressInput") as HTMLInputElement).value;
  const educationInput = (document.getElementById("educationInput") as HTMLTextAreaElement).value;
  const experienceInput = (document.getElementById("experienceInput") as HTMLTextAreaElement).value;
  const skillsInput = (document.getElementById("skillsInput") as HTMLInputElement).value;

  // Update resume fields dynamically
  const nameField = document.getElementById("name");
  const profileDescField = document.getElementById("profileDesc");
  const phoneField = document.getElementById("phone");
  const emailField = document.getElementById("email");
  const addressField = document.getElementById("address");
  const educationField = document.getElementById("education");
  const experienceField = document.getElementById("experience");
  const skillsField = document.getElementById("skills");

  if (nameField) nameField.textContent = nameInput || "Your Name";
  if (profileDescField) profileDescField.textContent = profileInput || "Your profile description will appear here.";
  if (phoneField) phoneField.textContent = phoneInput || "Your phone";
  if (emailField) emailField.textContent = emailInput || "Your email";
  if (addressField) addressField.textContent = addressInput || "Your address";
  if (educationField) educationField.textContent = educationInput || "Your education details";
  if (experienceField) experienceField.textContent = experienceInput || "Your experience";

  // Clear existing skills and add new ones dynamically
  if (skillsField) {
      skillsField.innerHTML = ""; // Clear the current list
      const skillsArray = skillsInput.split(",").map(skill => skill.trim());
      skillsArray.forEach(skill => {
          if (skill) {
              const li = document.createElement("li");
              li.textContent = skill;
              skillsField.appendChild(li);
          }
      });
  }
}

// Initialize the application on DOM content loaded
document.addEventListener("DOMContentLoaded", init);
