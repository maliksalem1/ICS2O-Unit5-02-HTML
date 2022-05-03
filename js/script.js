/* Created by: maliksalem1
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-02-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-02-HTML/",
  })
}

/**
 * This function gets the number from the text field.
 */
 function buttonClicked () {
 
// input
  const integer = parseInt(document.getElementById("integer").value)

  // process
  if (integer >= 0) {
    document.getElementById("answer").innerHTML =
      "Your number is positive " 
      console.log("positive")
  } else {
    document.getElementById("answer").innerHTML =
    "Your number is negative "
    console.log("negative") 
  }
}