"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;

    if (typeof text == "undefined" || typeof locale == "undefined") {
      return res.json({ error: "Required field(s) missing" });
    }

     if (text == "") {
       return res.json({ error: "No text to translate" });
     }

    if (Translator.locales.indexOf(locale) === -1) {
      return res.json({ error: "Invalid value for locale field" });
    }

    const translation = translator.translate(text, locale);
    res.json({ text: text, translation: translation });
  });
};
