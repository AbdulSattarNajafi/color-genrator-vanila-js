//Code for Hex color Page
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.getElementById("color-name");
btn.addEventListener('click', function() {
  let hexCol = "#";
  for(let i = 0; i < 6; i++) {
    hexCol += hex[randomHex()];
  }
  color.innerHTML = hexCol;
  document.getElementById("bg-color").style.backgroundColor = hexCol;
});
function randomHex() {
  return Math.floor(Math.random() * hex.length);
};