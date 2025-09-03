// API Management
async function pollForResult(jobId) {
  let attempts = 0;

  while (attempts < CONFIG.MAX_POLL_ATTEMPTS && isPolling) {
    try {
      const response = await fetch(`${CONFIG.STATUS_ENDPOINT}${jobId}`, {
        headers: {
          "Authorization": `Bearer ${CONFIG.API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Poll response:', data);

      switch (data.status) {
        case 'IN_QUEUE':
          updateStatus(t('inQueue'), 'queued');
          break;
        case 'IN_PROGRESS':
          updateStatus(t('processing'), 'processing');
          break;
        case 'COMPLETED':
          isPolling = false;
          if (data.output) {
            displayImages(data);
          } else {
            updateStatus(t('noImageData'), 'error');
          }
          return;
        case 'FAILED':
          isPolling = false;
          updateStatus(`${t('failed')} ${data.error || t('unknownError')}`, 'error');
          return;
        default:
          updateStatus(`${t('failed')} ${data.status}`, 'error');
          break;
      }

      attempts++;
      await sleep(CONFIG.POLL_INTERVAL);

    } catch (error) {
      console.error('Polling error:', error);
      updateStatus(`${t('pollingError')} ${error.message}`, 'error');
      isPolling = false;
      return;
    }
  }

  if (attempts >= CONFIG.MAX_POLL_ATTEMPTS) {
    isPolling = false;
    updateStatus(t('timeout'), 'error');
  }
}

async function generateImage() {
  if (isPolling) {
    return; // Prevent multiple simultaneous requests
  }

  const button = document.getElementById("runBtn");
  button.disabled = true;
  button.textContent = t('processingButton');
  
  isPolling = true;
  updateStatus(t('sendingRequest'), 'processing');

  try {
    const requestData = {
      prompt: document.getElementById('prompt').value,
      negative_prompt: document.getElementById('negativePrompt').value,
      height: parseInt(document.getElementById('height').value),
      width: parseInt(document.getElementById('width').value),
      num_inference_steps: parseInt(document.getElementById('numInferenceSteps').value),
      refiner_inference_steps: parseInt(document.getElementById('refinerInferenceSteps').value),
      guidance_scale: parseFloat(document.getElementById('guidanceScale').value),
      strength: parseFloat(document.getElementById('strength').value),
      high_noise_frac: parseFloat(document.getElementById('highNoiseFrac').value),
      seed: parseInt(document.getElementById('seed').value),
      scheduler: document.getElementById('scheduler').value,
      num_images: parseInt(document.getElementById('numImages').value),
    };

    const res = await fetch(CONFIG.ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONFIG.API_KEY}`,
      },
      body: JSON.stringify({
        input: requestData
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    console.log('Initial response:', data);

    if (data.id) {
      updateStatus(t('requestSent'), 'queued');
      await pollForResult(data.id);
    } else {
      throw new Error('No job ID in response');
    }

  } catch (error) {
    console.error('Request error:', error);
    updateStatus(`${t('failed')} ${error.message}`, 'error');
    isPolling = false;
  } finally {
    button.disabled = false;
    button.textContent = t('generateButton');
  }
}
