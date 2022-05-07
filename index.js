const button = document.getElementById("button");
const h1 = document.getElementById("h1");
var array = ["blue", "green", "yellow", "red", "blanchedalmond", "orange", "bisque"];
function Oke() {
  Math.floor(Math.random(array) * 3);
  var ya = (h1.style.color = array[Math.floor(Math.random() * 7)]);
  console.log(ya);
}
