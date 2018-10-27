// Comma separated string names
var names = "Seyfat Khamidov, Horacio Hernandez, Derik Solis, Luis Quevedo";

// Splits name by comma
var arrayNames = names.split(",");

// Array for last names
var lastNames = [];

// Array for final names
var finalNames = [];

// Loops the names and assigns them to lastNames
for (var i = 0; i < arrayNames.length; i++) {
  // Trims white space, splits it by space and reverse first and last names.
  var currentName = arrayNames[i]
    .trim()
    .split(" ")
    .reverse();

  // Reversed last name gets assigned to lastNames
  lastNames.push(currentName);
}
// sort function sorts last name alphabetically
lastNames.sort();

for (var j = 0; j < lastNames.length; j++) {
  //Reversing the names and adding them to create string
  var currentLastName = lastNames[j].reverse().join(" ");

  // Assigning the full names to finalNames
  finalNames.push(currentLastName);
}
//storing html via javascipt
var namesContainer = document.getElementById("names-container");

for (var k = 0; k < finalNames.length; k++) {
  //Splits finalNames by space
  var nameParts = finalNames[k].split(" ");
  // Creates p tag in html
  var li = document.createElement("li");

  //innerHTML defines what you will enter into html p tag
  // <p> first <span>last</span> </p>
  li.innerHTML = nameParts[0] + "<span>" + nameParts[1] + "</span>";

  //takes children of div and addding each p to the end
  namesContainer.appendChild(li);
}
