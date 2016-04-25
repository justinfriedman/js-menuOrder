// begin with a blank/new order
var order = 'Your order will include ';
var components = [ "Meat", "Rice", "Beans", "Lettuce", "Cheese", "Pico", "Salsa", "Guac", "Corn", "Sour Cream" ];

// build a function to ask questions

function question(item, choice) {
  var answerInput = prompt("Do you want " + item + "?");

if (answerInput.toUpperCase() === choice) {
    order += item + ", ";
}
else {
  order += "no " + item + ", ";
}

}
console.log("got here");

// call the QUESTION function with the order options
// question("Meat", "YES");
// question("Rice", "YES");
// question("Beans", "YES");
// question("Lettuce", "YES");
// question("Cheese", "YES");
// question("Pico", "YES");
// question("Salsa", "YES");
// question("Guac", "YES");
// question("Corn", "YES");
// question("Sour cream", "YES");

var i = 0;

while ( i < components.length) {

  question(components[i], "YES");
  i = i + 1;
  console.log("in while loop");
}

// output their order
document.write("<p> Order: " + order + "<p>");
