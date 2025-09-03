// Configuration
const CONFIG = {
  API_KEY: "",
  ENDPOINT: "",
  STATUS_ENDPOINT: "",
  POLL_INTERVAL: 5000, // 5 seconds
  MAX_POLL_ATTEMPTS: 60, // 5 minutes total
  DEFAULT_LANGUAGE: 'en',
  SUPPORTED_LANGUAGES: ['en', 'sv', 'de', 'es']
};

// Default form values
const DEFAULT_VALUES = {
  prompt: "An astronaut riding a horse in the sunset, highly detailed",
  negativePrompt: "blurry, low quality, deformed, ugly, text, watermark, signature",
  width: "1024",
  height: "1024",
  numImages: "1",
  numInferenceSteps: "25",
  refinerInferenceSteps: "50",
  guidanceScale: "7.5",
  strength: "0.3",
  highNoiseFrac: "0.8",
  seed: "42",
  scheduler: "K_EULER"
};
