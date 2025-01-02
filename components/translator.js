const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  static locales = ["american-to-british", "british-to-american"];

  translate(text, locale) {
    if (locale === "american-to-british") {
      const words = text.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (americanToBritishTitles[word]) {
          words[i] = americanToBritishTitles[word];
        } else if (americanToBritishSpelling[word]) {
          words[i] = americanToBritishSpelling[word];
        } else if (americanOnly[word]) {
          words[i] = americanOnly[word];
        }
      }
      return words.join(" ");
    } else if (locale === "british-to-american") {
      const words = text.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (britishOnly[word]) {
          words[i] = britishOnly[word];
        }
      }
      return words.join(" ");
    } else {
      throw new Error("Invalid locale");
    }
  }
}

module.exports = Translator;
