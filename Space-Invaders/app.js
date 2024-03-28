const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".results");
const width = 15;

for (let i = 0; i < width * width; i++) {
  // adding 225 divs inside grid
  const square = document.createElement("div");
  grid.appendChild(square);
}
console.log("hello world");
