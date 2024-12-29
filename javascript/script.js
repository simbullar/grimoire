// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Function to switch between tabs
function switchTab(tabName) {
  // Hide all tab content
  tabContents.forEach((content) => content.classList.remove("active"));

  // Deactivate all tab buttons
  tabButtons.forEach((button) => button.classList.remove("active"));

  // Show the selected tab content
  const selectedContent = document.getElementById(tabName);
  selectedContent.classList.add("active");

  //* i pulled this shit from the init commit
  //* omfg i missed this

  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

  // Show and activate the .content-container-wiki when wiki-content tab is selected
  //   const wikiContainer = document.querySelector(".content-container-wiki");
  //  wikiContainer.classList.toggle("active", tabName === "wiki-content");
}
// Add event listeners to each tab button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");
    switchTab(targetTab);
  });
});

// File System - Folder Toggle
document.querySelectorAll(".folder").forEach((folder) => {
  folder.addEventListener("click", () => {
    folder.classList.toggle("open");
  });
});
// Select the container
const container = document.getElementById("container");

// Replace :d20: with 🎲 and style it
function replaceD20() {
  const text = container.innerHTML; // Get current content
  const replacedText = text.replace(
    /:d20:/g,
    '<span class="large icon-d20"></span>',
  ); // Replace with styled character
  container.innerHTML = replacedText; // Update the content
}

// Run the replacement function
replaceD20();
