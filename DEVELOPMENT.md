# Development Guide

## 🛠️ Development Setup

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, JavaScript

### Local Development
1. Clone or download the project
2. Open `index.html` in your browser
3. Use browser dev tools for debugging
4. Edit files and refresh to see changes

## 📁 File Organization

### HTML Structure (`index.html`)
- Semantic HTML5 markup
- Modular structure with clear sections
- Language selector in header
- External CSS and JS file references

### CSS Architecture
- **`main.css`**: Core layout and base styles
- **`components.css`**: Reusable component styles
- **`responsive.css`**: Mobile and responsive breakpoints

### JavaScript Modules
- **`config.js`**: Configuration constants
- **`translations.js`**: Multi-language text
- **`i18n.js`**: Language switching logic
- **`presets.js`**: Preset configurations
- **`ui.js`**: User interface management
- **`api.js`**: API communication
- **`main.js`**: Application initialization

## 🔧 Adding Features

### New Parameters
1. Add to HTML form in `index.html`
2. Add to `DEFAULT_VALUES` in `config.js`
3. Add translations in `translations.js`
4. Update form handling in `ui.js`
5. Include in API request in `api.js`

### New Languages
1. Add language code to `CONFIG.SUPPORTED_LANGUAGES`
2. Add complete translation object to `TRANSLATIONS`
3. Update language selector in `index.html`
4. Test all UI elements in new language

### New Presets
1. Add preset object to `PRESETS` in `presets.js`
2. Add preset button to HTML
3. Add translations for preset name
4. Test preset loading functionality

## 🎨 Styling Guidelines

### CSS Best Practices
- Use CSS Grid and Flexbox for layouts
- Implement mobile-first responsive design
- Use CSS custom properties for theming
- Maintain consistent spacing and typography
- Optimize for performance and accessibility

### Color Scheme
- Primary: `#667eea` to `#764ba2` gradient
- Success: `#28a745` to `#20c997` gradient
- Warning: `#ffc107` to `#ffca2c` gradient
- Error: `#dc3545` to `#c82333` gradient
- Neutral: `#6c757d` to `#545b62` gradient

### Typography
- Font family: System fonts stack
- Headings: Bold weights (600-700)
- Body text: Regular weight (400)
- Monospace: For technical data

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly button sizes (44px minimum)
- Simplified layouts for small screens
- Optimized form controls
- Reduced animations for performance

## 🌍 Internationalization

### Translation Keys
Use descriptive keys organized by category:
- UI elements: `title`, `promptSection`
- Labels: `positivePromptLabel`, `widthLabel`
- Messages: `sendingRequest`, `completed`
- Tooltips: `positivePromptTooltip`

### Translation Structure
```javascript
{
  en: {
    // English translations
  },
  sv: {
    // Swedish translations
  }
  // ... other languages
}
```

## 🔌 API Integration

### Request Structure
```javascript
{
  input: {
    prompt: "string",
    negative_prompt: "string",
    height: number,
    width: number,
    // ... other parameters
  }
}
```

### Response Handling
- Poll status endpoint every 5 seconds
- Handle multiple image responses
- Display timing information
- Show seed for reproducibility

## 🧪 Testing

### Manual Testing Checklist
- [ ] Language switching works
- [ ] Form validation
- [ ] Preset loading
- [ ] Image generation
- [ ] Mobile responsiveness
- [ ] Dark mode support
- [ ] Error handling
- [ ] Tooltip functionality

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Performance Optimization

### Best Practices
- Minimize DOM queries
- Use efficient CSS selectors
- Optimize images and assets
- Implement lazy loading where appropriate
- Cache API responses when possible

### Monitoring
- Use browser dev tools
- Monitor network requests
- Check console for errors
- Test on slower connections

## 🔒 Security Considerations

### Client-Side Security
- Validate user inputs
- Sanitize HTML output
- Use HTTPS for API calls
- Implement proper error handling

### API Security
- Secure API key storage
- Implement rate limiting
- Validate API responses
- Handle authentication errors

## 📚 Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Can I Use](https://caniuse.com/)

---

**Happy Coding! 🚀**
