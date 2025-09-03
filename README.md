# AI Image Generator

A modern, responsive web application for generating AI images using the RunPod API. Features a beautiful UI with internationalization support, mobile responsiveness, and comprehensive parameter controls.

## 🌟 Features

- **Multi-language Support**: English, Swedish, German, Spanish
- **Mobile-First Design**: Responsive layout for all devices
- **Real-time Polling**: Automatic status updates during generation
- **Multiple Image Support**: Generate 1-4 images simultaneously
- **Preset Configurations**: Quick setup for common use cases
- **Interactive Tooltips**: Helpful explanations for all parameters
- **Dark Mode Support**: Automatic theme detection
- **Modern UI**: Beautiful gradients and animations

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── styles/
│   ├── main.css           # Core styles and layout
│   ├── components.css     # Component-specific styles
│   └── responsive.css     # Mobile and responsive design
├── js/
│   ├── config.js          # Configuration and constants
│   ├── translations.js    # Multi-language translations
│   ├── i18n.js           # Internationalization logic
│   ├── presets.js        # Preset configurations
│   ├── ui.js             # UI management functions
│   ├── api.js            # API communication
│   └── main.js           # Application initialization
└── README.md             # This file
```

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Select your language** from the dropdown
4. **Configure parameters** or use presets
5. **Click "Generate Image"** to create AI images

## ⚙️ Configuration

### API Settings
Edit `js/config.js` to update:
- API endpoints
- Polling intervals
- Default values
- Supported languages

### Adding New Languages
1. Add language code to `CONFIG.SUPPORTED_LANGUAGES`
2. Add translations to `TRANSLATIONS` object in `js/translations.js`
3. Update language selector in `index.html`

## 🎨 Customization

### Styling
- **Main styles**: Edit `styles/main.css`
- **Components**: Edit `styles/components.css`
- **Responsive**: Edit `styles/responsive.css`

### Presets
Add new presets in `js/presets.js`:
```javascript
const PRESETS = {
  myPreset: {
    prompt: "Your prompt here",
    negativePrompt: "Your negative prompt",
    // ... other parameters
  }
};
```

## 📱 Mobile Support

The application is fully responsive with:
- **Touch-friendly controls**
- **Optimized layouts** for small screens
- **Landscape orientation** support
- **High DPI display** optimization

## 🌍 Internationalization

### Supported Languages
- **English (en)**: Default language
- **Swedish (sv)**: Svenska
- **German (de)**: Deutsch
- **Spanish (es)**: Español

### Language Detection
- **Browser preference** detection
- **Local storage** for saved preferences
- **Manual selection** via dropdown

## 🔧 Technical Details

### Dependencies
- **Vanilla JavaScript**: No external frameworks
- **Modern CSS**: Flexbox, Grid, CSS Variables
- **HTML5**: Semantic markup

### Browser Support
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### API Integration
- **RunPod API**: Stable Diffusion XL
- **Async/await**: Modern JavaScript patterns
- **Error handling**: Comprehensive error management

## 📊 Parameters Explained

### Generation Parameters
- **Inference Steps**: First generation phase (20-30 optimal)
- **Refiner Steps**: Refinement phase (40-80 optimal)
- **Guidance Scale**: Prompt adherence (7-10 for exact, 3-6 for creative)
- **Strength**: Refinement intensity (0.3-0.4 optimal)
- **High Noise Fraction**: Detail preservation (0.7-0.9 optimal)
- **Seed**: Reproducibility (empty for random)

### Image Settings
- **Width/Height**: Image dimensions (512-1536px)
- **Number of Images**: Simultaneous generations (1-4)
- **Scheduler**: Noise reduction algorithm

## 🎯 Preset Configurations

### Portrait
Optimized for professional portraits with studio lighting.

### Landscape
Perfect for scenic photography and nature shots.

### Artistic
Creative and abstract art with vibrant colors.

### Photorealistic
High-detail, realistic photography style.

### Anime
Anime-style characters with vibrant colors.

## 🔒 Security Notes

- **API Key**: Stored in client-side code (consider server-side proxy for production)
- **HTTPS**: Required for API communication
- **CORS**: Ensure proper CORS configuration

## 🚀 Deployment

### Local Development
Simply open `index.html` in a browser.

### Web Server
Upload all files to any web server supporting static files.

### CDN Deployment
Upload to services like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
1. Check the documentation
2. Review browser console for errors
3. Verify API key and endpoints
4. Test with different parameters

---

**Happy Image Generating! 🎨✨**
