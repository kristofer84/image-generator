// Main Application
document.addEventListener('DOMContentLoaded', function() {
  // Load saved language preference
  loadSavedLanguage();
  
  // Initialize language
  initializeLanguage();
  
  // Initialize form with default values
  initializeForm();

  // Initialize range value displays
  initializeRangeValues();

  // Initialize configuration UI
  initConfigUI();

  // Add event listener for generate button
  document.getElementById("runBtn").addEventListener("click", generateImage);
  
  console.log('AI Image Generator initialized successfully!');
});
