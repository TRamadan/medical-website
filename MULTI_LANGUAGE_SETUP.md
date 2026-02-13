# Multi-Language Setup Guide

This Angular medical website now supports both English and Arabic languages with full RTL (Right-to-Left) support.

## Features Implemented

### 1. Language Switching
- **Language Switcher Component**: A button in the header that allows users to toggle between English and Arabic
- **Persistent Language Selection**: Language preference is saved in localStorage
- **RTL Support**: Automatic text direction switching for Arabic

### 2. Translation System
- **Angular i18n**: Built-in internationalization for static content
- **Translation Service**: Dynamic translations for content that can't be extracted by Angular's i18n
- **Arabic Font**: Cairo font family for better Arabic text rendering

### 3. RTL Layout Support
- **CSS RTL Rules**: Comprehensive RTL styling for all components
- **Bootstrap RTL**: Proper margin/padding adjustments for RTL layout
- **Icon Positioning**: Correct icon placement for RTL text

## File Structure

```
src/
├── app/
│   ├── services/
│   │   ├── language.service.ts          # Language state management
│   │   └── translation.service.ts       # Dynamic translations
│   └── components/
│       └── shared-ui/
│           └── language-switcher/       # Language toggle component
├── locale/
│   └── messages.ar.xlf                  # Arabic translations
└── styles.css                           # RTL support styles
```

## How to Use

### 1. Adding New Translations

#### For Static Content (Angular i18n):
1. Add the `i18n` attribute to your HTML elements:
```html
<h1 i18n="@@hero.title">Expert Sports Medicine Care</h1>
```

2. Extract translations:
```bash
npm run extract-i18n
```

3. Add translations to `src/locale/messages.ar.xlf`:
```xml
<trans-unit id="hero.title" datatype="html">
  <source>Expert Sports Medicine Care</source>
  <target>رعاية طبية رياضية متخصصة</target>
</trans-unit>
```

#### For Dynamic Content (Translation Service):
1. Add translations to the `TranslationService`:
```typescript
// In translation.service.ts
private translations: TranslationMap = {
  'new.key': { en: 'English Text', ar: 'النص العربي' }
};
```

2. Use in components:
```typescript
// In component
constructor(public translationService: TranslationService) {}

// In template
{{ translationService.translate('new.key') }}
```

### 2. Building for Different Languages

#### Development:
```bash
# English (default)
npm start

# Arabic
ng serve --configuration=ar
```

#### Production:
```bash
# English
npm run build:en

# Arabic
npm run build:ar
```

### 3. Adding RTL Support to New Components

1. Use the language service to check RTL state:
```typescript
constructor(private languageService: LanguageService) {}

isRTL(): boolean {
  return this.languageService.isRTL();
}
```

2. Add RTL-specific CSS:
```css
/* RTL specific styles */
[dir="rtl"] .your-component {
  text-align: right;
  margin-left: 0;
  margin-right: 1rem;
}
```

## Best Practices

### 1. Text Length
- Arabic text is typically 20-30% longer than English
- Design layouts to accommodate longer text
- Use flexible containers and proper text wrapping

### 2. Date and Number Formatting
- Use Angular's built-in date and number pipes with locale
- Register locale data in `main.ts`
- Use `LOCALE_ID` provider for proper formatting

### 3. Images and Icons
- Consider cultural differences in imagery
- Use appropriate icons for each language
- Ensure proper alignment for RTL layouts

### 4. Forms
- Right-align labels and inputs in RTL
- Adjust validation messages for each language
- Consider different input patterns for Arabic

## Troubleshooting

### Common Issues:

1. **Text not translating**: Ensure the translation key exists in the service
2. **RTL layout broken**: Check CSS rules for RTL selectors
3. **Font not loading**: Verify Google Fonts import in styles.css
4. **Build errors**: Make sure @angular/localize is installed

### ing:
- Check browser console for translation errors
- Verify localStorage has the correct language preference
- Test with different screen sizes in both languages

## Future Enhancements

1. **More Languages**: Add support for additional languages
2. **Lazy Loading**: Load translations on demand
3. **Translation Management**: Implement a translation management system
4. **SEO**: Add language-specific meta tags and URLs
5. **Accessibility**: Improve screen reader support for RTL

## Dependencies

- `@angular/localize`: Angular's internationalization package
- `Cairo Font`: Google Fonts for Arabic text rendering
- `Bootstrap`: RTL support through CSS customizations 