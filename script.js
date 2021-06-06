
// You can print messages to the console to debug when things go wrong!
console.log("Hello 🌎");

// Get all the buttons on the page
const btns = document.querySelectorAll("button");
if (btns) {
  console.log( "button count", btns.length);
  // not all browsers support .forEach on a nodelist (returned by queryselectorall)
  for( let i=0; i<btns.length; i++){
    console.log( "button ["+i+"]");
    btns[i].onclick = function() {
      console.log( "button ["+btns[i].id+"] clicked");
      // TODO: Bring up a dialog to add the item to the shopping basket
    }
  }
}
