// Global Vars
const houseButtons = document.querySelectorAll(".house-button");
console.log(houseButtons);
for (const button of houseButtons) {
  button.addEventListener("click", showFlags);
}
const HOUSE_FLAG_FILES = {
  "gryffindor-button": "./Images/GryffindorFlag.png",
  "hufflepuff-button": "./Images/HufflepuffFlag.png",
  "slytherin-button": "./Images/SlytherinFlag.png",
  "ravenclaw-button": "./Images/RavenclawFlag.png",
};

// House Button Event Listeners
function showFlags(event) {
  // console log and setting vars
  console.log(event);
  const eventTargetId = event.target.id;
  console.log(eventTargetId);

  // grab image to change
  const flagImages = document.querySelectorAll(".flag");
  // display appropriate flag based on button clicked
  for (const flagImage of flagImages) {
    flagImage.src = HOUSE_FLAG_FILES[eventTargetId];
  }
}
