const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const britishToAmericanTitles = Object.fromEntries(
  Object.entries(americanToBritishTitles).map(([american, british]) => [
    british,
    american,
  ])
);

const britishToAmericanSpelling = Object.fromEntries(
  Object.entries(americanToBritishSpelling).map(([american, british]) => [
    british,
    american,
  ])
);

class Translator {
  static locales = ["american-to-british", "british-to-american"];

  translate(text, locale) {
    const originalText = text;
    switch (locale) {
      case "american-to-british":
        Object.keys(americanToBritishTitles).forEach(title => {
          const regex = new RegExp(title, 'gi');
          const replacement = `<span class="highlight">${americanToBritishTitles[title].charAt(0).toUpperCase() + americanToBritishTitles[title].slice(1)}</span>`;
          text = text.replace(regex, replacement);
        });
  
        Object.keys(americanToBritishSpelling).forEach(word => {
          const regex = new RegExp(word, 'gi');
          const replacement = `<span class="highlight">${americanToBritishSpelling[word]}</span>`;
          text = text.replace(regex, replacement);
        });
  
        Object.keys(americanOnly).forEach(word => {
          const regex = new RegExp(`\\b${word}\\b`, 'gi');
          const replacement = `<span class="highlight">${americanOnly[word]}</span>`;
          text = text.replace(regex, replacement);
        });
  
        const americanTimeRegex = /\b(\d{1,2}):(\d{2})\b/gi;
        text = text.replace(americanTimeRegex, (match, hour, minute) => {
          return `<span class="highlight">${hour}.${minute}</span>`;
        });
  
        // Capitalize first word
        text = text.charAt(0).toUpperCase() + text.slice(1);
        break;
      case "british-to-american":
        Object.keys(britishToAmericanTitles).forEach(title => {
          const regex = new RegExp(`\\b${title}\\b`, 'gi');
          const replacement = `<span class="highlight">${
            britishToAmericanTitles[title].charAt(0).toUpperCase() +
            britishToAmericanTitles[title].slice(1)
          }</span>`;
          text = text.replace(regex, replacement);
        });
  
        Object.keys(britishToAmericanSpelling).forEach(word => {
          const regex = new RegExp(word, 'gi');
          const replacement = `<span class="highlight">${britishToAmericanSpelling[word]}</span>`;
          text = text.replace(regex, replacement);
        });
  
        Object.keys(britishOnly).forEach(word => {
          const regex = new RegExp(`\\b${word}\\b(?!<\\/span>)`, 'gi');
          const replacement = `<span class="highlight">${britishOnly[word]}</span>`;
          text = text.replace(regex, replacement);
        });
  
        const britishTimeRegex = /\b(\d{1,2})\.(\d{2})(?=\.|$)/gi;
        text = text.replace(britishTimeRegex, (match, hour, minute) => {
          return `<span class="highlight">${hour}:${minute}</span>`;
        });
  
        // Capitalize first word
        text = text.charAt(0).toUpperCase() + text.slice(1);
        break;
      default:
        throw new Error("Invalid locale");
    }
  
    if (text === originalText) {
      return "Everything looks good to me!";
    }
  
    return text;
  }
}

module.exports = Translator;
