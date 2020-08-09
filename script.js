// For synchonrising the Bar and the Meter

const characterAmountNumber = document.querySelector("#characterAmountNumber");
const characterAmountRange = document.querySelector("#characterAmountRange");

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

// Generating Random Password

const includeUppercaseElement = document.querySelector("#includeUppercase");
const includeNumbersElement = document.querySelector("#includeNumbers");
const includeSymbolsElement = document.querySelector("#includeSymbols");
const form = document.querySelector(".form");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

const passwordDisplay = document.querySelector('.password-display');

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.value = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    String.fromCharCode(65);
    let charCodes = LOWERCASE_CHAR_CODES;
    if (includeUppercase) { charCodes = charCodes.concat(UPPERCASE_CHAR_CODES); }
    if (includeNumbers) { charCodes = charCodes.concat(NUMBER_CHAR_CODES); }
    if (includeSymbols) { charCodes = charCodes.concat(SYMBOLS_CHAR_CODES); }

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

// Copy Password

let copyButton = document.querySelector("#btn-copy");

copyButton.addEventListener("click", copyPassword);

function copyPassword() {
    passwordDisplay.select();
    passwordDisplay.setSelectionRange(0, 999)
    document.execCommand("copy");
}
