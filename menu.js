// begin with a blank/new order
var order = 'Your order will include ';


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

// call the QUESTION function with the order options
question("Meat", "YES");
question("Rice", "YES");
question("Beans", "YES");
question("Lettuce", "YES");
question("Cheese", "YES");
question("Pico", "YES");
question("Salsa", "YES");
question("Guac", "YES");
question("Corn", "YES");
question("Sour cream", "YES");

// output their order
document.write("<p> Order: " + order + "<p>");
