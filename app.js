// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


/* const container = document.querySelector("#container");
const newImg = document.createElement("img");
newImg.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
container.appendChild(newImg); */

// I need to do this process for more than one hundred times.
// All of these sources are sequantial
// So i will use loops to append

for (let i=1; i<10; i++){
    const newImg = document.createElement("img");
    newImg.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
    container.appendChild(newImg);
}