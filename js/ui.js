// UI Management
let isPolling = false;

// Update range value displays
function updateRangeValue(rangeId, valueId) {
  const range = document.getElementById(rangeId);
  const value = document.getElementById(valueId);
  
  if (range && value) {
    range.addEventListener('input', () => {
      value.textContent = range.value;
    });
  }
}

// Initialize range value displays
function initializeRangeValues() {
  updateRangeValue('numInferenceSteps', 'numInferenceStepsValue');
  updateRangeValue('refinerInferenceSteps', 'refinerInferenceStepsValue');
  updateRangeValue('guidanceScale', 'guidanceScaleValue');
  updateRangeValue('strength', 'strengthValue');
  updateRangeValue('highNoiseFrac', 'highNoiseFracValue');
}

// Update status display
function updateStatus(message, statusClass = '') {
  const output = document.getElementById("output");
  if (!output) return;
  
  output.innerHTML = `
    <div class="status ${statusClass}">
      ${message}
      ${statusClass === 'processing' || statusClass === 'queued' ? '<div class="spinner"></div>' : ''}
    </div>
  `;
}

// Display generated images
function displayImages(data) {
  const output = document.getElementById("output");
  if (!output) return;
  
  let imageHtml = `<div class="status completed">${t('completed')}</div>`;
  
  // Handle multiple images
  if (data.output.images && data.output.images.length > 0) {
    imageHtml += '<div class="image-grid">';
    data.output.images.forEach((imageData, index) => {
      imageHtml += `
        <div class="image-item">
          <h4>${t('title')} ${index + 1}</h4>
          <img src="${imageData}" alt="Generated image ${index + 1}">
        </div>
      `;
    });
    imageHtml += '</div>';
  } 
  // Handle single image
  else if (data.output.image_url) {
    imageHtml += `
      <div class="image-item">
        <img src="${data.output.image_url}" alt="Generated image">
      </div>
    `;
  } else {
    updateStatus(t('noImageData'), 'error');
    return;
  }
  
  // Add seed information if available
  if (data.output.seed) {
    imageHtml += `<div class="metadata">Seed: ${data.output.seed}</div>`;
  }
  
  // Add timing information if available
  if (data.delayTime || data.executionTime) {
    const timingInfo = [];
    if (data.delayTime) timingInfo.push(`${t('queueTime')} ${(data.delayTime / 1000).toFixed(1)}${t('seconds')}`);
    if (data.executionTime) timingInfo.push(`${t('processingTime')} ${(data.executionTime / 1000).toFixed(1)}${t('seconds')}`);
    imageHtml += `<div class="timing-info">${timingInfo.join(' | ')}</div>`;
  }
  
  output.innerHTML = imageHtml;
}

// Sleep utility function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize form with default values
function initializeForm() {
  document.getElementById('prompt').value = DEFAULT_VALUES.prompt;
  document.getElementById('negativePrompt').value = DEFAULT_VALUES.negativePrompt;
  document.getElementById('width').value = DEFAULT_VALUES.width;
  document.getElementById('height').value = DEFAULT_VALUES.height;
  document.getElementById('numImages').value = DEFAULT_VALUES.numImages;
  document.getElementById('numInferenceSteps').value = DEFAULT_VALUES.numInferenceSteps;
  document.getElementById('refinerInferenceSteps').value = DEFAULT_VALUES.refinerInferenceSteps;
  document.getElementById('guidanceScale').value = DEFAULT_VALUES.guidanceScale;
  document.getElementById('strength').value = DEFAULT_VALUES.strength;
  document.getElementById('highNoiseFrac').value = DEFAULT_VALUES.highNoiseFrac;
  document.getElementById('seed').value = DEFAULT_VALUES.seed;
  document.getElementById('scheduler').value = DEFAULT_VALUES.scheduler;
  
  // Update range value displays
  document.getElementById('numInferenceStepsValue').textContent = DEFAULT_VALUES.numInferenceSteps;
  document.getElementById('refinerInferenceStepsValue').textContent = DEFAULT_VALUES.refinerInferenceSteps;
  document.getElementById('guidanceScaleValue').textContent = DEFAULT_VALUES.guidanceScale;
  document.getElementById('strengthValue').textContent = DEFAULT_VALUES.strength;
  document.getElementById('highNoiseFracValue').textContent = DEFAULT_VALUES.highNoiseFrac;
}

function openConfig() {
  const modal = document.getElementById('configModal');
  if (!modal) return;
  const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
  if (stored) {
    try {
      const cfg = JSON.parse(stored);
      document.getElementById('serviceSelect').value = cfg.service || 'runpod';
      document.getElementById('runpodId').value = cfg.runpodId || '';
      document.getElementById('runpodKey').value = cfg.runpodKey || '';
    } catch (e) {
      console.error('Failed to parse config', e);
    }
  }
  modal.classList.remove('hidden');
}

function closeConfig() {
  const modal = document.getElementById('configModal');
  if (modal) modal.classList.add('hidden');
}

function initConfigUI() {
  const btn = document.getElementById('configBtn');
  const saveBtn = document.getElementById('saveConfig');
  const closeBtn = document.getElementById('closeConfig');
  if (btn) btn.addEventListener('click', openConfig);
  if (closeBtn) closeBtn.addEventListener('click', closeConfig);
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const cfg = {
        service: document.getElementById('serviceSelect').value,
        runpodId: document.getElementById('runpodId').value.trim(),
        runpodKey: document.getElementById('runpodKey').value.trim()
      };
      saveConfig(cfg);
      closeConfig();
    });
  }
}
