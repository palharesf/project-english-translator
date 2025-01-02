const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    const translator = new Translator();

    test('Translate Mangoes are my favorite fruit. to British English', () => {
      const result = translator.translate('Mangoes are my favorite fruit.', 'american-to-british');
      assert.strictEqual(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test('Translate I ate yogurt for breakfast. to British English', () => {
      const result = translator.translate('I ate yogurt for breakfast.', 'american-to-british');
      assert.strictEqual(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });

    test('Translate We had a party at my friend\'s condo. to British English', () => {
      const result = translator.translate('We had a party at my friend\'s condo.', 'american-to-british');
      assert.strictEqual(result, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    });

    test('Translate Can you toss this in the trashcan for me? to British English', () => {
      const result = translator.translate('Can you toss this in the trashcan for me?', 'american-to-british');
      assert.strictEqual(result, 'Can you toss this in the <span class="highlight">bin</span> for me?');
    });

    test('Translate The parking lot was full. to British English', () => {
      const result = translator.translate('The parking lot was full.', 'american-to-british');
      assert.strictEqual(result, 'The <span class="highlight">car park</span> was full.');
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
      const result = translator.translate('Like a high tech Rube Goldberg machine.', 'american-to-british');
      assert.strictEqual(result, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    });

    test('Translate To play hooky means to skip class or work. to British English', () => {
      const result = translator.translate('To play hooky means to skip class or work.', 'american-to-british');
      assert.strictEqual(result, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
      const result = translator.translate('No Mr. Bond, I expect you to die.', 'american-to-british');
      assert.strictEqual(
        result,
        'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      );
    });

    test('Translate Dr. Grosh will see you now. to British English', () => {
      const result = translator.translate('Dr. Grosh will see you now.', 'american-to-british');
      assert.strictEqual(
        result,
        '<span class="highlight">Dr</span> Grosh will see you now.'
      );
    });

    test('Translate Lunch is at 12:15 today. to British English', () => {
      const result = translator.translate('Lunch is at 12:15 today.', 'american-to-british');
      assert.strictEqual(result, 'Lunch is at <span class="highlight">12.15</span> today.');
    });

    // test('Translate We watched the footie match for a while. to American English', () => {
    //   const result = translator.translate('We watched the footie match for a while.', 'british-to-american');
    //   assert.strictEqual(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
    // });

    // test('Translate Paracetamol takes up to an hour to work. to American English', () => {
    //   const result = translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american');
    //   assert.strictEqual(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    // });

    // test('Translate First, caramelise the onions. to American English', () => {
    //   const result = translator.translate('First, caramelise the onions.', 'british-to-american');
    //   assert.strictEqual(result, 'First, <span class="highlight">caramelize</span> the onions.');
    // });

    // test('Translate I spent the bank holiday at the funfair. to American English', () => {
    //   const result = translator.translate('I spent the bank holiday at the funfair.', 'british-to-american');
    //   assert.strictEqual(result, 'I spent the <span class="highlight">holiday</span> at the <span class="highlight">carnival</span>.');
    // });

    // test('Translate I\'ve just got bits and bobs in my bum bag. to American English', () => {
    //   const result = translator.translate('I\'ve just got bits and bobs in my bum bag.', 'british-to-american');
    //   assert.strictEqual(result, 'I\'ve just got bits and bobs in my <span class="highlight">fanny pack</span>.');
    // });

    // test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
    //   const result = translator.translate('The car boot sale at Boxted Airfield was called off.', 'british-to-american');
    //   assert.strictEqual(result, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    // });

    // test('Translate Have you met Mrs Kalyani? to American English', () => {
    //   const result = translator.translate('Have you met Mrs Kalyani?', 'british-to-american');
    //   assert.strictEqual(result, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    // });

    // test('Translate Prof Joyner of King\'s College, London. to American English', () => {
    //   const result = translator.translate('Prof Joyner of King\'s College, London.', 'british-to-american');
    //   assert.strictEqual(
    //     result,
    //     '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    //   );
    // });

    // test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
    //   const result = translator.translate('Tea time is usually around 4 or 4.30.', 'british-to-american');
    //   assert.strictEqual(result, 'Tea time is usually around 4 or <span class="highlight">4:30.</span>');
    // });

});

