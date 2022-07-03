const hex = document.getElementById("hex");
const btnGen = document.getElementById("generate");
const btnRes = document.getElementById("reset");

const generateRandomColor = () => {
  const randColor = Math.random().toString(16).substring(2, 8);
  const randColorString = "#" + randColor;
  hex.style.color = randColorString;
  document.body.style.backgroundColor = randColorString;
  hex.innerHTML = randColorString.toUpperCase(  );
};

const resetRandomColor = () => {
  document.body.style.backgroundColor = "#FCC5C0"
  hex.style.color = "#FCC5C0";
  hex.innerHTML = "#FCC5C0";
};

btnGen.addEventListener("click", generateRandomColor);
btnRes.addEventListener("click", resetRandomColor);

// let color = Math.random()
// color = Math.random().toString(16).substring(2, 8)
// console.log(color);
