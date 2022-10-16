const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(valueBoolean) {
    if (valueBoolean === 'undefined') {
      this.valueBoolean = true;
    }
    else {
      this.valueBoolean = valueBoolean;
    }
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }

  
  encrypt(message, keyEncrypt) {
    //if one of the arguments is not passed
    if (!message || !keyEncrypt) {
      throw new Error('Incorrect arguments!');
    }

    //get array from srting
    let arrayLettersFromMessage = message.split('');

    let arrayWhitOnlyLetters = [];
    let indexOfLetterMessageInAlphabet;
    let LetterInKey;
    let indexOfLetterKeyInAlphabet;
    let count = 0;
    let indexDecriptLetterInalphabet;
    let decryptLetterFromAlphabet;
    let resultArrayOfDecriptLetters = [];

    //find indexes of letters of message in alphabet and indexes of letters of key in alphabet
    //and find decrypted letter in alphabet use the formula (indexMessage + indexKey) % alphabet.length
    arrayLettersFromMessage.forEach(letter => {
      if (this.alphabet.includes(`${letter.toUpperCase()}`)) {
        count++;

        if (count <= keyEncrypt.length) {
          LetterInKey = keyEncrypt[count - 1];
        }
        else if (count > keyEncrypt.length) {
          count = 1;
          LetterInKey = keyEncrypt[count - 1];
        }

        indexOfLetterMessageInAlphabet = this.alphabet.indexOf(`${letter.toUpperCase()}`);
        indexOfLetterKeyInAlphabet = this.alphabet.indexOf(`${LetterInKey.toUpperCase()}`);
        indexDecriptLetterInalphabet = (indexOfLetterMessageInAlphabet + indexOfLetterKeyInAlphabet) % this.alphabet.length;
        decryptLetterFromAlphabet = this.alphabet[indexDecriptLetterInalphabet];

        resultArrayOfDecriptLetters.push(decryptLetterFromAlphabet.toUpperCase());
      }
      else {
        resultArrayOfDecriptLetters.push(letter);
      }
    });

    //if passed this.valueBoolean === false, it means that type of mashine is reverse
    if (this.valueBoolean === false) {
      return resultArrayOfDecriptLetters.reverse().join('');
    }
    //if passed this.valueBoolean === true, it means that type of mashine is direct
    return resultArrayOfDecriptLetters.join('');
  }

  decrypt(encryptedMessage, keyDecrypt) {
    if (!encryptedMessage || !keyDecrypt) {
      throw new Error('Incorrect arguments!');
    }

    //get array from srting
    let arrayLettersFromencryptedMessage = encryptedMessage.split('');

    //let arrayWhitOnlyLetters = [];
    let indexOfLetterDecryptedMessageInAlphabet;
    let LetterInKey;
    let indexOfLetterKeyInAlphabet;
    let count = 0;
    let indexEncriptLetterInalphabet;
    let encryptLetterFromAlphabet;
    let resultArrayOfEncriptLetters = [];

    arrayLettersFromencryptedMessage.forEach(letter => {
      if (this.alphabet.includes(`${letter.toUpperCase()}`)) {
        count++;

        if (count <= keyDecrypt.length) {
          LetterInKey = keyDecrypt[count - 1];
        }
        else if (count > keyDecrypt.length) {
          count = 1;
          LetterInKey = keyDecrypt[count - 1];
        }

        indexOfLetterDecryptedMessageInAlphabet = this.alphabet.indexOf(`${letter.toUpperCase()}`);
        indexOfLetterKeyInAlphabet = this.alphabet.indexOf(`${LetterInKey.toUpperCase()}`);

        if ((indexOfLetterDecryptedMessageInAlphabet - indexOfLetterKeyInAlphabet) < 0) {
          indexEncriptLetterInalphabet = Math.abs(indexOfLetterDecryptedMessageInAlphabet - indexOfLetterKeyInAlphabet) % this.alphabet.length;
          //fint letters from the end in array
          encryptLetterFromAlphabet = this.alphabet[this.alphabet.length - indexEncriptLetterInalphabet];
        }
        else {
          indexEncriptLetterInalphabet = (indexOfLetterDecryptedMessageInAlphabet - indexOfLetterKeyInAlphabet) % this.alphabet.length;
          encryptLetterFromAlphabet = this.alphabet[indexEncriptLetterInalphabet];
        }
        resultArrayOfEncriptLetters.push(encryptLetterFromAlphabet);
      }
      else {
        resultArrayOfEncriptLetters.push(letter);
      }
    });

    //if passed this.valueBoolean === false, it means that type of mashine is reverse
    if (this.valueBoolean === false) {
      return resultArrayOfEncriptLetters.reverse().join('');
    }
    //if passed this.valueBoolean === true, it means that type of mashine is direct
    return resultArrayOfEncriptLetters.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
