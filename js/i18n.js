// Internationalization
let currentLanguage = CONFIG.DEFAULT_LANGUAGE;

// Detect browser language
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  
  if (CONFIG.SUPPORTED_LANGUAGES.includes(langCode)) {
    return langCode;
  }
  
  return CONFIG.DEFAULT_LANGUAGE;
}

// Initialize language
function initializeLanguage() {
  currentLanguage = detectBrowserLanguage();
  document.getElementById('languageSelect').value = currentLanguage;
  updateUI();
}

// Change language
function changeLanguage(lang) {
  if (!CONFIG.SUPPORTED_LANGUAGES.includes(lang)) {
    console.warn(`Unsupported language: ${lang}`);
    return;
  }
  
  currentLanguage = lang;
  document.documentElement.lang = lang;
  updateUI();
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Get translation
function t(key) {
  const translation = TRANSLATIONS[currentLanguage];
  if (!translation) {
    console.warn(`No translations found for language: ${currentLanguage}`);
    return TRANSLATIONS[CONFIG.DEFAULT_LANGUAGE][key] || key;
  }
  
  return translation[key] || TRANSLATIONS[CONFIG.DEFAULT_LANGUAGE][key] || key;
}

// Update UI with current language
function updateUI() {
  // Update page title
  document.title = t('title');
  
  // Update main title
  document.getElementById('title').textContent = t('title');
  
  // Update section headers
  document.getElementById('promptSection').textContent = t('promptSection');
  document.getElementById('imageSettingsSection').textContent = t('imageSettingsSection');
  document.getElementById('generationParamsSection').textContent = t('generationParamsSection');
  document.getElementById('presetsSection').textContent = t('presetsSection');
  
  // Update labels
  document.getElementById('positivePromptLabel').textContent = t('positivePromptLabel');
  document.getElementById('negativePromptLabel').textContent = t('negativePromptLabel');
  document.getElementById('widthLabel').textContent = t('widthLabel');
  document.getElementById('heightLabel').textContent = t('heightLabel');
  document.getElementById('numImagesLabel').textContent = t('numImagesLabel');
  document.getElementById('inferenceStepsLabel').textContent = t('inferenceStepsLabel');
  document.getElementById('refinerStepsLabel').textContent = t('refinerStepsLabel');
  document.getElementById('guidanceScaleLabel').textContent = t('guidanceScaleLabel');
  document.getElementById('strengthLabel').textContent = t('strengthLabel');
  document.getElementById('noiseFractionLabel').textContent = t('noiseFractionLabel');
  document.getElementById('seedLabel').textContent = t('seedLabel');
  document.getElementById('schedulerLabel').textContent = t('schedulerLabel');
  
  // Update placeholders
  document.getElementById('prompt').placeholder = t('positivePromptPlaceholder');
  document.getElementById('negativePrompt').placeholder = t('negativePromptPlaceholder');
  
  // Update preset buttons
  document.getElementById('portraitPreset').textContent = t('portraitPreset');
  document.getElementById('landscapePreset').textContent = t('landscapePreset');
  document.getElementById('artisticPreset').textContent = t('artisticPreset');
  document.getElementById('photorealisticPreset').textContent = t('photorealisticPreset');
  document.getElementById('animePreset').textContent = t('animePreset');
  
  // Update generate button
  const runBtn = document.getElementById('runBtn');
  if (runBtn && !runBtn.disabled) {
    runBtn.textContent = t('generateButton');
  }
  
  // Update tooltips
  updateTooltips();
}

// Update tooltips with current language
function updateTooltips() {
  const tooltips = document.querySelectorAll('[data-tooltip-key]');
  
  tooltips.forEach(element => {
    const key = element.getAttribute('data-tooltip-key');
    const tooltipText = element.querySelector('.tooltiptext');
    
    if (tooltipText) {
      tooltipText.textContent = t(key);
    } else {
      // Create tooltip text element if it doesn't exist
      const newTooltipText = document.createElement('span');
      newTooltipText.className = 'tooltiptext';
      newTooltipText.textContent = t(key);
      element.appendChild(newTooltipText);
    }
  });
}

// Load saved language preference
function loadSavedLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && CONFIG.SUPPORTED_LANGUAGES.includes(savedLang)) {
    currentLanguage = savedLang;
  }
}
