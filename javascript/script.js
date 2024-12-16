// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Function to switch between tabs
function switchTab(tabName) {
    // Hide all tab content
    tabContents.forEach(content => content.classList.remove("active"));

    // Deactivate all tab buttons
    tabButtons.forEach(button => button.classList.remove("active"));

    // Activate the clicked tab's content
    document.getElementById(tabName).classList.add("active");

    // Activate the clicked tab button
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
}

// Add event listeners to each tab button
tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");
        switchTab(targetTab);
    });
});

// File System - Folder Toggle
document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", () => {
        folder.classList.toggle("open");
    });
});

var fs = require('fs');
