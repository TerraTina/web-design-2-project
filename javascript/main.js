// button click to toggle between two css styles and button text. (this) in html and (btn) in js selects for that particular button press. Works on the article button's directly nested in with .parentNode, so don't nest button further in article.
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
