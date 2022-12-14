//button click to toggle between two css styles and button text. (this) in html and (btn) in js selects for that particular button press. Works on the article button's directly nested in with .parentNode, so don't nest button further in article.
function readMoreLess(btn) {
  var card = btn.parentNode;

//if card is closed, open
  var open = false;
  if (card.className == "card-closed") {
    open = true;
  }

//search any open-card section, close if found
  var openCards = document.getElementsByClassName('card-open');
  for (let q = 0; q < openCards.length; q++) {
    var openCard = openCards[q];
    for (var i = 0; i < openCard.childNodes.length; i++) {
      if (openCard.childNodes[i].className == "readmoreless-button") {
        var readMoreLessButton = openCard.childNodes[i];
        openCard.className = "card-closed";
        readMoreLessButton.innerHTML = "Read More";
        break;
      }
    }
  }



//if card is open, change class and button text
    if (open) {

      card.className = "card-open";
  		btn.innerHTML = "Read Less";
    }
}
