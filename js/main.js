// House -button Event Variables
const houseButtons = document.querySelectorAll(".house-button");
console.log(houseButtons);
for (const button of houseButtons) {
  button.addEventListener("click", showFlags);
}

// House Button Event Listeners
function showFlags(event) {
  console.log(event);
  const eventTargetId = event.target.id;
  console.log(eventTargetId);
  if (eventTargetId === "gryffindor-button") {
    alert("Gryffindor Wins!");
  } else if (eventTargetId === "hufflepuff-button") {
    alert("Hufflepuff Wins!");
  } else if (eventTargetId === "slytherin-button") {
    alert("Slytherin Wins!");
  } else if (eventTargetId === "ravenclawbutton") {
    alert("Ravenclaw Wins!");
  } else {
    alert("No winner chosen yet.");
  }
}
