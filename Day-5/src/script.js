const btn = document.getElementById("check");
const word = document.getElementById("text-input");
const result = document.getElementById("result");

const check = (str) => {
  let temp = "";
  for (let index = str.length - 1; index >= 0; index--) {
    temp += str[index];
  }
  return temp;
};

btn.addEventListener("click", () => {
    const _word = word.value
    _word == check(_word) ? result.textContent = `'${_word}' is a plaindrome` : result.textContent = `'${_word}' is NOT a plaindrome`
});
