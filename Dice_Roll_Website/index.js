var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomnumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").src = "./images/dice" + randomnumber1 + ".png";
document.querySelector(".img2").src = "./images/dice" + randomnumber2 + ".png";
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 wins!";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Play 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
