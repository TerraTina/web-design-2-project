// toggle between two css styles and button text
function readMoreLess(btn) {
  var card = btn.parentNode;
// enter first css class name in quotes that you want to start with
    if (card.className == "card-closed") {
// enter the second css class name in quotes that you want to toggle to
    card.className = "card-open";
		btn.innerHTML = "Read Less";
// enter the first css class name in quotes again
    } else {
			card.className = "card-closed";
			btn.innerHTML = "Read More";
   }
}
