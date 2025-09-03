// Preset configurations
const PRESETS = {
  portrait: {
    prompt: "Professional portrait of a person, high quality, detailed face, studio lighting",
    negativePrompt: "blurry, low quality, deformed, ugly, text, watermark, signature, multiple people",
    width: "1024",
    height: "1024",
    numInferenceSteps: "30",
    refinerInferenceSteps: "60",
    guidanceScale: "8.0",
    strength: "0.3",
    highNoiseFrac: "0.8",
    seed: "42",
    scheduler: "K_EULER"
  },
  landscape: {
    prompt: "Beautiful landscape photography, mountains, sunset, golden hour, high resolution",
    negativePrompt: "blurry, low quality, deformed, ugly, text, watermark, signature, people, buildings",
    width: "1024",
    height: "768",
    numInferenceSteps: "25",
    refinerInferenceSteps: "50",
    guidanceScale: "7.5",
    strength: "0.3",
    highNoiseFrac: "0.8",
    seed: "42",
    scheduler: "K_EULER"
  },
  artistic: {
    prompt: "Abstract art, vibrant colors, artistic style, creative composition, masterpiece",
    negativePrompt: "blurry, low quality, deformed, ugly, text, watermark, signature, realistic",
    width: "1024",
    height: "1024",
    numInferenceSteps: "35",
    refinerInferenceSteps: "70",
    guidanceScale: "9.0",
    strength: "0.4",
    highNoiseFrac: "0.7",
    seed: "42",
    scheduler: "K_EULER_ANCESTRAL"
  },
  photorealistic: {
    prompt: "Photorealistic image, high detail, professional photography, sharp focus",
    negativePrompt: "blurry, low quality, deformed, ugly, text, watermark, signature, artistic, painting",
    width: "1024",
    height: "1024",
    numInferenceSteps: "40",
    refinerInferenceSteps: "80",
    guidanceScale: "6.5",
    strength: "0.2",
    highNoiseFrac: "0.9",
    seed: "42",
    scheduler: "DPMSolverMultistep"
  },
  anime: {
    prompt: "Anime style character, colorful, detailed, high quality, vibrant",
    negativePrompt: "blurry, low quality, deformed, ugly, text, watermark, signature, realistic, photograph",
    width: "1024",
    height: "1024",
    numInferenceSteps: "30",
    refinerInferenceSteps: "60",
    guidanceScale: "8.5",
    strength: "0.3",
    highNoiseFrac: "0.8",
    seed: "42",
    scheduler: "K_EULER"
  }
};

// Load preset configuration
function loadPreset(presetName) {
  const preset = PRESETS[presetName];
  if (!preset) {
    console.warn(`Preset not found: ${presetName}`);
    return;
  }

  // Update form fields
  document.getElementById('prompt').value = preset.prompt;
  document.getElementById('negativePrompt').value = preset.negativePrompt;
  document.getElementById('width').value = preset.width;
  document.getElementById('height').value = preset.height;
  document.getElementById('numInferenceSteps').value = preset.numInferenceSteps;
  document.getElementById('refinerInferenceSteps').value = preset.refinerInferenceSteps;
  document.getElementById('guidanceScale').value = preset.guidanceScale;
  document.getElementById('strength').value = preset.strength;
  document.getElementById('highNoiseFrac').value = preset.highNoiseFrac;
  document.getElementById('seed').value = preset.seed;
  document.getElementById('scheduler').value = preset.scheduler;

  // Update range value displays
  document.getElementById('numInferenceStepsValue').textContent = preset.numInferenceSteps;
  document.getElementById('refinerInferenceStepsValue').textContent = preset.refinerInferenceSteps;
  document.getElementById('guidanceScaleValue').textContent = preset.guidanceScale;
  document.getElementById('strengthValue').textContent = preset.strength;
  document.getElementById('highNoiseFracValue').textContent = preset.highNoiseFrac;

  // Update active preset button
  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}
