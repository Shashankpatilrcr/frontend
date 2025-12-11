// function change() {
//   let colors = ["green", "red", "blue", "yellow", "pink", "purple"];
//   let c = colors[Math.floor(Math.random()* colors.length)];
//   document.body.style.backgroundColor=c;

// }

let age = prompt("enter your age");
if (age >= 18) {
  document.getElementById("msg").innerHTML = "you are major";
} else {
  document.getElementById("msg").innerHTML = "you are minor";
}
