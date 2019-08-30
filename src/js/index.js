/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var pronoun = ["the", "our", "your"];
  var adj = ["great", "big", "amazing"];
  var noun = ["jogger", "racoon", "bloop"];

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        document.querySelector("#domain_name").innerHTML +=
          "<li> www." + pronoun[i] + adj[j] + noun[k] + ".com </li>";
      }
    }
  }
};
