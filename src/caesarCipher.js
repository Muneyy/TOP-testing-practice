function caesarCipher(string) {
    const charArray = string.split('');
    const nextCharArray = [];
    charArray.forEach((char) => {
        if (char === char.toUpperCase()) {
            appendCaesarCharacters(nextCharArray, char.charCodeAt(0), 1);
        } else {
            appendCaesarCharacters(nextCharArray, char.charCodeAt(0), 0);
        }
    });
    return nextCharArray.join('');
}

function appendCaesarCharacters(array, code, upper) {
    let nextCode = code + 1;
    if (nextCode === 123) {
        nextCode = 97;
    }
    if (upper) {
        array.push(String.fromCharCode(nextCode).toUpperCase());
    } else if (!upper) {
        array.push(String.fromCharCode(nextCode));
    }
}

export { caesarCipher };
