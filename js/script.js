const russian = document.querySelector("#russianInput"),
      english = document.querySelector("#englishInput");
const russianKeyboard = `ё1234567890-=йцукенгшщзхъфывапролджэячсмитьбю.Ё!"№;%:?*()_+ЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,`;
const englishKeyboard = "`1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL"+`:"ZXCVBNM<>?`;

function get(object, key, defaultValue) {
    let result;
    for (let value of object) {
        if (value[0] == key) {
            result = value[1];
        }
    }
    return (typeof result !== "undefined") ? result : defaultValue;

}

let rusEngDict = [];
let engRusDict = [];
for (let i=0; i < 93; i++) {
    rusEngDict[i] = [russianKeyboard[i], englishKeyboard[i]];
    engRusDict[i] = [englishKeyboard[i], russianKeyboard[i]];
}
console.log(rusEngDict);
console.log(engRusDict);

russian.addEventListener('input', event => {
    let newWord = "";
    for (let letter of event.target.value) {

        newWord += get(rusEngDict, letter, letter);
    }
    english.value = newWord;
});
english.addEventListener('input', event => {
    let newWord = "";
    for (let letter of event.target.value) {

        newWord += get(engRusDict, letter, letter);
    }
    russian.value = newWord;
});