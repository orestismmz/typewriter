"use strict";
// I need to view the h1 sentence 1 letter at a time

// I start with creating a variable for the h1 field
const h1 = document.querySelector("#typewriter");
// and a variable for the text which is already in the h1
const text = h1.textContent;

// I need to empty the text in the h1 field so I can re-appear it
// with the "1 letter at a time" animation
// so:
h1.textContent = "";

// this variable will later on be compared to the number of characters
// in the sentence. This will help me loop the function for that many times
let iterator = 0;

initLoop();

// This function is called at the beginning and it calls the loop function
function initLoop() {
  loop();
}

// This is the function that that reveals a character and
// loops again for every character there is in the sentence
function loop() {
  console.log(`loop`), iterator;
  // if my iterator value is smaller than the number of characters do stuff
  // my iterator is now 0 and the number of characters are more so:
  if (iterator < text.length) {
    // The h1.textcontent already has the value of an empty string.
    // Now it will get the value of the 1st character of the given sentence.
    // That is because the charAt has the value of the iterator in its
    // parameter which is 0.
    h1.textContent += text.charAt(iterator);
    // the =+ sign is what adds 2 values next to each other in the same string
    // What the code line above does is :
    // after the 1st character appears, the 2nd character will appear next to
    // it in one string.

    // here at the end of the function, using ++ I add +1 to the previous value
    // of the iterator variable as soon as the code  above is executed so that
    // next time this function loops, the iterator equals to 1 and show the
    // 2nd letter in the sentence etc etc.
    iterator++;

    // the letters should appear 1 by one but with some small amount of time
    // between each letter

    // thats when the setTimeout comes in and runs this loop function every
    // 200milisecons
    setTimeout(loop, 200);
  }
}
