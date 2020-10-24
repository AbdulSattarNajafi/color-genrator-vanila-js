// Code for Named Color Page
const colors = ["Cyan", "LightBlue", "Purple", "Lime", "Magenta", "Olive", "Silver"]
const btn = document.getElementById("btn");
const color = document.getElementById("color-name");
btn.addEventListener('click', function() {
  const randomNumber = getRandomColor();
  document.getElementById("bg-color").style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});
//Get random color from Colors
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
};
