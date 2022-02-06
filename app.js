// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

/* const container = document.querySelector("#container");
const newImg = document.createElement("img");
newImg.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
container.appendChild(newImg); */

// I need to do this process for more than one hundred times.
// All of these sources are sequantial
// So i will use loops to append
// I also include the number for each of them

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  //   first their labels

  const pokemon = document.createElement("div");

  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;

  //   adding their pictures with sequantially

  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
