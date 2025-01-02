const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  static locales = ["american-to-british", "british-to-american"];

  translate(text, locale) {
    if (locale === "american-to-british") {
        const words = text.toLowerCase().split(" ");
        console.log("Words: ", words);
      const originalWords = [...words];
      
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (americanToBritishTitles[word]) {
          words[
            i
          ] = `<span class="highlight">${americanToBritishTitles[word]}</span>`;
        } else if (americanToBritishSpelling[word]) {
          words[
            i
          ] = `<span class="highlight">${americanToBritishSpelling[word]}</span>`;
        } else if (americanOnly[word]) {
          words[i] = `<span class="highlight">${americanOnly[word]}</span>`;
        } else if (word.includes(":")) {
            words[i] = `<span class="highlight">${word.replace(":", ".")}</span>`;
        }
      }
      if (words === originalWords) {
        return "Everything looks good to me!";
      } else {
        return words.join(" ").replace(/^\w/, (c) => c.toUpperCase());
      }
    } else if (locale === "british-to-american") {
      const words = text.toLowerCase().split(" ");
      const originalWords = [...words];

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (britishOnly[word]) {
          words[i] = `<span class="highlight">${britishOnly[word]}</span>`;
        } else if (word.includes(".")) {
            words[i] = `<span class="highlight">${word.replace(".", ":")}</span>`;
        }
      }

      if (words === originalWords) {
        return "Everything looks good to me!";
      } else {
        return words.join(" ").replace(/^\w/, (c) => c.toUpperCase());
      }
    } else {
      throw new Error("Invalid locale");
    }
  }
}

module.exports = Translator;
