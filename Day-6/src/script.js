const btn = document.getElementById("check"),
  word = document.getElementById("text-input"),
  result = document.getElementById("result");

const check = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
    }
  }
  return count;
};

btn.addEventListener("click", () => {
  _word = word.value;
  _numberVowels = check(_word.toLowerCase());
  word.value
    ? (result.innerHTML = `${_word} has ${_numberVowels} ${
        _numberVowels > 1 ? "vowels" : "vowel"
      }`)
    : (result.innerHTML = "Please enter a word");
});
