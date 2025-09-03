// Translations
const TRANSLATIONS = {
  en: {
    // UI Elements
    title: "AI Image Generator",
    promptSection: "📝 Prompt & Negative Prompt",
    imageSettingsSection: "📐 Image Size & Count",
    generationParamsSection: "⚙️ Generation Parameters",
    presetsSection: "🎨 Presets",
    
    // Labels
    positivePromptLabel: "Positive prompt:",
    negativePromptLabel: "Negative prompt:",
    widthLabel: "Width:",
    heightLabel: "Height:",
    numImagesLabel: "Number of images:",
    inferenceStepsLabel: "Inference Steps:",
    refinerStepsLabel: "Refiner Steps:",
    guidanceScaleLabel: "Guidance Scale:",
    strengthLabel: "Strength:",
    noiseFractionLabel: "High Noise Fraction:",
    seedLabel: "Seed:",
    schedulerLabel: "Scheduler:",
    
    // Preset buttons
    portraitPreset: "Portrait",
    landscapePreset: "Landscape",
    artisticPreset: "Artistic",
    photorealisticPreset: "Photorealistic",
    animePreset: "Anime",
    
    // Placeholders
    positivePromptPlaceholder: "Describe what you want to generate...",
    negativePromptPlaceholder: "Describe what you DON'T want in the image...",
    
    // Button text
    generateButton: "🚀 Generate Image",
    processingButton: "Processing...",
    
    // Status messages
    sendingRequest: "Sending request...",
    requestSent: "Request sent, waiting for result...",
    inQueue: "Image generation in queue...",
    processing: "Processing image...",
    completed: "Image(s) generated successfully!",
    failed: "Error:",
    unknownError: "Unknown error",
    noImageData: "Error: No image data in response",
    timeout: "Timeout: Image generation took too long",
    pollingError: "Error during polling:",
    
    // Tooltips
    positivePromptTooltip: "Describe what you want to see in the image. The more detailed and specific, the better the result. Use commas to separate different elements.",
    negativePromptTooltip: "Describe what you DON'T want in the image. This helps the AI avoid unwanted elements like blurry parts, text, watermarks, etc.",
    widthTooltip: "Image width in pixels. Larger images provide more detail but take longer to generate.",
    heightTooltip: "Image height in pixels. Square images (1024x1024) usually work best for most prompts.",
    numImagesTooltip: "Number of variations of the same prompt to generate. More images provide more options but cost more time and resources.",
    inferenceStepsTooltip: "Number of steps for the first generation phase. More steps provide higher quality but take longer. 20-30 steps is usually optimal.",
    refinerStepsTooltip: "Number of steps for the refinement phase. This improves details and quality. 40-80 steps provides good results.",
    guidanceScaleTooltip: "How strictly the AI follows the prompt. Higher values (7-10) provide more exact results, lower values (3-6) provide more creative variations.",
    strengthTooltip: "Strength of the refinement process. 0.3-0.4 is usually optimal. Higher values can destroy original details.",
    noiseFractionTooltip: "Proportion of high-frequency noise retained during the refinement process. 0.7-0.9 provides good balance between details and stability.",
    seedTooltip: "Random seed for reproducible results. Same seed + same prompt = same image. Leave empty for random results.",
    schedulerTooltip: "Algorithm for noise reduction. K_EULER is fastest, DPMSolverMultistep provides highest quality, DDIM is more stable.",
    
    // Timing info
    queueTime: "Queue:",
    processingTime: "Processing:",
    seconds: "s"
  },
  
  sv: {
    // UI Elements
    title: "AI Bildgenerator",
    promptSection: "📝 Prompt & Negativ Prompt",
    imageSettingsSection: "📐 Bildstorlek & Antal",
    generationParamsSection: "⚙️ Genereringsparametrar",
    presetsSection: "🎨 Förinställningar",
    
    // Labels
    positivePromptLabel: "Positiv prompt:",
    negativePromptLabel: "Negativ prompt:",
    widthLabel: "Bredd:",
    heightLabel: "Höjd:",
    numImagesLabel: "Antal bilder:",
    inferenceStepsLabel: "Inferenssteg:",
    refinerStepsLabel: "Förfiningssteg:",
    guidanceScaleLabel: "Vägledningsskala:",
    strengthLabel: "Styrka:",
    noiseFractionLabel: "Hög brusandel:",
    seedLabel: "Slumpfrö:",
    schedulerLabel: "Schemaläggare:",
    
    // Preset buttons
    portraitPreset: "Porträtt",
    landscapePreset: "Landskap",
    artisticPreset: "Konstnärlig",
    photorealisticPreset: "Fotorealistisk",
    animePreset: "Anime",
    
    // Placeholders
    positivePromptPlaceholder: "Beskriv vad du vill generera...",
    negativePromptPlaceholder: "Beskriv vad du INTE vill ha i bilden...",
    
    // Button text
    generateButton: "🚀 Generera Bild",
    processingButton: "Bearbetar...",
    
    // Status messages
    sendingRequest: "Skickar förfrågan...",
    requestSent: "Förfrågan skickad, väntar på resultat...",
    inQueue: "Bildgenerering i kö...",
    processing: "Bearbetar bild...",
    completed: "Bild(er) genererade framgångsrikt!",
    failed: "Fel:",
    unknownError: "Okänt fel",
    noImageData: "Fel: Ingen bild data i svaret",
    timeout: "Timeout: Bildgenerering tog för lång tid",
    pollingError: "Fel vid polling:",
    
    // Tooltips
    positivePromptTooltip: "Beskriv vad du vill se i bilden. Ju mer detaljerat och specifikt, desto bättre resultat. Använd kommatecken för att separera olika element.",
    negativePromptTooltip: "Beskriv vad du INTE vill ha i bilden. Detta hjälper AI:n att undvika oönskade element som suddiga delar, text, vattenmärken, etc.",
    widthTooltip: "Bildens bredd i pixlar. Större bilder ger mer detalj men tar längre tid att generera.",
    heightTooltip: "Bildens höjd i pixlar. Kvadratiska bilder (1024x1024) fungerar oftast bäst för de flesta prompts.",
    numImagesTooltip: "Antal variationer av samma prompt som ska genereras. Fler bilder ger fler alternativ men kostar mer tid och resurser.",
    inferenceStepsTooltip: "Antal steg för den första genereringsfasen. Fler steg ger högre kvalitet men tar längre tid. 20-30 steg är oftast optimalt.",
    refinerStepsTooltip: "Antal steg för förfiningsfasen. Detta förbättrar detaljer och kvalitet. 40-80 steg ger bra resultat.",
    guidanceScaleTooltip: "Hur strikt AI:n följer prompten. Högre värden (7-10) ger mer exakta resultat, lägre värden (3-6) ger mer kreativa variationer.",
    strengthTooltip: "Styrkan av förfiningsprocessen. 0.3-0.4 är oftast optimalt. Högre värden kan förstöra ursprungliga detaljer.",
    noiseFractionTooltip: "Andel av högfrekvent brus som behålls under förfiningsprocessen. 0.7-0.9 ger bra balans mellan detaljer och stabilitet.",
    seedTooltip: "Slumptalsfrö för reproducerbara resultat. Samma seed + samma prompt = samma bild. Låt tomt för slumpmässiga resultat.",
    schedulerTooltip: "Algoritm för brusreducering. K_EULER är snabbast, DPMSolverMultistep ger högsta kvalitet, DDIM är mer stabil.",
    
    // Timing info
    queueTime: "Kö:",
    processingTime: "Bearbetning:",
    seconds: "s"
  },
  
  de: {
    // UI Elements
    title: "KI Bildgenerator",
    promptSection: "📝 Prompt & Negativer Prompt",
    imageSettingsSection: "📐 Bildgröße & Anzahl",
    generationParamsSection: "⚙️ Generierungsparameter",
    presetsSection: "🎨 Voreinstellungen",
    
    // Labels
    positivePromptLabel: "Positiver Prompt:",
    negativePromptLabel: "Negativer Prompt:",
    widthLabel: "Breite:",
    heightLabel: "Höhe:",
    numImagesLabel: "Anzahl Bilder:",
    inferenceStepsLabel: "Inferenz-Schritte:",
    refinerStepsLabel: "Verfeinerungs-Schritte:",
    guidanceScaleLabel: "Führungsskala:",
    strengthLabel: "Stärke:",
    noiseFractionLabel: "Hochfrequenz-Rauschanteil:",
    seedLabel: "Seed:",
    schedulerLabel: "Scheduler:",
    
    // Preset buttons
    portraitPreset: "Porträt",
    landscapePreset: "Landschaft",
    artisticPreset: "Künstlerisch",
    photorealisticPreset: "Fotorealistisch",
    animePreset: "Anime",
    
    // Placeholders
    positivePromptPlaceholder: "Beschreiben Sie, was Sie generieren möchten...",
    negativePromptPlaceholder: "Beschreiben Sie, was Sie NICHT im Bild haben möchten...",
    
    // Button text
    generateButton: "🚀 Bild generieren",
    processingButton: "Verarbeitung...",
    
    // Status messages
    sendingRequest: "Anfrage wird gesendet...",
    requestSent: "Anfrage gesendet, warte auf Ergebnis...",
    inQueue: "Bildgenerierung in Warteschlange...",
    processing: "Bild wird verarbeitet...",
    completed: "Bild(er) erfolgreich generiert!",
    failed: "Fehler:",
    unknownError: "Unbekannter Fehler",
    noImageData: "Fehler: Keine Bilddaten in der Antwort",
    timeout: "Timeout: Bildgenerierung dauerte zu lange",
    pollingError: "Fehler beim Polling:",
    
    // Tooltips
    positivePromptTooltip: "Beschreiben Sie, was Sie im Bild sehen möchten. Je detaillierter und spezifischer, desto besser das Ergebnis. Verwenden Sie Kommas, um verschiedene Elemente zu trennen.",
    negativePromptTooltip: "Beschreiben Sie, was Sie NICHT im Bild haben möchten. Dies hilft der KI, unerwünschte Elemente wie verschwommene Teile, Text, Wasserzeichen usw. zu vermeiden.",
    widthTooltip: "Bildbreite in Pixeln. Größere Bilder bieten mehr Details, benötigen aber längere Generierungszeiten.",
    heightTooltip: "Bildhöhe in Pixeln. Quadratische Bilder (1024x1024) funktionieren normalerweise am besten für die meisten Prompts.",
    numImagesTooltip: "Anzahl der Variationen desselben Prompts, die generiert werden sollen. Mehr Bilder bieten mehr Optionen, kosten aber mehr Zeit und Ressourcen.",
    inferenceStepsTooltip: "Anzahl der Schritte für die erste Generierungsphase. Mehr Schritte bieten höhere Qualität, benötigen aber mehr Zeit. 20-30 Schritte sind normalerweise optimal.",
    refinerStepsTooltip: "Anzahl der Schritte für die Verfeinerungsphase. Dies verbessert Details und Qualität. 40-80 Schritte liefern gute Ergebnisse.",
    guidanceScaleTooltip: "Wie streng die KI dem Prompt folgt. Höhere Werte (7-10) liefern genauere Ergebnisse, niedrigere Werte (3-6) liefern kreativere Variationen.",
    strengthTooltip: "Stärke des Verfeinerungsprozesses. 0.3-0.4 ist normalerweise optimal. Höhere Werte können ursprüngliche Details zerstören.",
    noiseFractionTooltip: "Anteil des hochfrequenten Rauschens, der während des Verfeinerungsprozesses beibehalten wird. 0.7-0.9 bietet eine gute Balance zwischen Details und Stabilität.",
    seedTooltip: "Zufallssaat für reproduzierbare Ergebnisse. Gleiche Saat + gleicher Prompt = gleiches Bild. Leer lassen für zufällige Ergebnisse.",
    schedulerTooltip: "Algorithmus für Rauschreduzierung. K_EULER ist am schnellsten, DPMSolverMultistep bietet höchste Qualität, DDIM ist stabiler.",
    
    // Timing info
    queueTime: "Warteschlange:",
    processingTime: "Verarbeitung:",
    seconds: "s"
  },
  
  es: {
    // UI Elements
    title: "Generador de Imágenes IA",
    promptSection: "📝 Prompt & Prompt Negativo",
    imageSettingsSection: "📐 Tamaño & Cantidad de Imágenes",
    generationParamsSection: "⚙️ Parámetros de Generación",
    presetsSection: "🎨 Presets",
    
    // Labels
    positivePromptLabel: "Prompt positivo:",
    negativePromptLabel: "Prompt negativo:",
    widthLabel: "Ancho:",
    heightLabel: "Alto:",
    numImagesLabel: "Número de imágenes:",
    inferenceStepsLabel: "Pasos de Inferencia:",
    refinerStepsLabel: "Pasos de Refinamiento:",
    guidanceScaleLabel: "Escala de Guía:",
    strengthLabel: "Fuerza:",
    noiseFractionLabel: "Fracción de Ruido Alto:",
    seedLabel: "Semilla:",
    schedulerLabel: "Programador:",
    
    // Preset buttons
    portraitPreset: "Retrato",
    landscapePreset: "Paisaje",
    artisticPreset: "Artístico",
    photorealisticPreset: "Fotorrealista",
    animePreset: "Anime",
    
    // Placeholders
    positivePromptPlaceholder: "Describe lo que quieres generar...",
    negativePromptPlaceholder: "Describe lo que NO quieres en la imagen...",
    
    // Button text
    generateButton: "🚀 Generar Imagen",
    processingButton: "Procesando...",
    
    // Status messages
    sendingRequest: "Enviando solicitud...",
    requestSent: "Solicitud enviada, esperando resultado...",
    inQueue: "Generación de imagen en cola...",
    processing: "Procesando imagen...",
    completed: "¡Imagen(es) generada(s) exitosamente!",
    failed: "Error:",
    unknownError: "Error desconocido",
    noImageData: "Error: No hay datos de imagen en la respuesta",
    timeout: "Tiempo de espera agotado: La generación de imagen tardó demasiado",
    pollingError: "Error durante el polling:",
    
    // Tooltips
    positivePromptTooltip: "Describe lo que quieres ver en la imagen. Cuanto más detallado y específico, mejor el resultado. Usa comas para separar diferentes elementos.",
    negativePromptTooltip: "Describe lo que NO quieres en la imagen. Esto ayuda a la IA a evitar elementos no deseados como partes borrosas, texto, marcas de agua, etc.",
    widthTooltip: "Ancho de la imagen en píxeles. Imágenes más grandes proporcionan más detalle pero tardan más en generarse.",
    heightTooltip: "Alto de la imagen en píxeles. Las imágenes cuadradas (1024x1024) suelen funcionar mejor para la mayoría de prompts.",
    numImagesTooltip: "Número de variaciones del mismo prompt a generar. Más imágenes proporcionan más opciones pero cuestan más tiempo y recursos.",
    inferenceStepsTooltip: "Número de pasos para la primera fase de generación. Más pasos proporcionan mayor calidad pero tardan más. 20-30 pasos suele ser óptimo.",
    refinerStepsTooltip: "Número de pasos para la fase de refinamiento. Esto mejora detalles y calidad. 40-80 pasos proporciona buenos resultados.",
    guidanceScaleTooltip: "Qué tan estrictamente la IA sigue el prompt. Valores más altos (7-10) proporcionan resultados más exactos, valores más bajos (3-6) proporcionan variaciones más creativas.",
    strengthTooltip: "Fuerza del proceso de refinamiento. 0.3-0.4 suele ser óptimo. Valores más altos pueden destruir detalles originales.",
    noiseFractionTooltip: "Proporción de ruido de alta frecuencia retenido durante el proceso de refinamiento. 0.7-0.9 proporciona buen equilibrio entre detalles y estabilidad.",
    seedTooltip: "Semilla aleatoria para resultados reproducibles. Misma semilla + mismo prompt = misma imagen. Dejar vacío para resultados aleatorios.",
    schedulerTooltip: "Algoritmo para reducción de ruido. K_EULER es más rápido, DPMSolverMultistep proporciona mayor calidad, DDIM es más estable.",
    
    // Timing info
    queueTime: "Cola:",
    processingTime: "Procesamiento:",
    seconds: "s"
  }
};
