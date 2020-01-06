"use strict";
var echo = function(text, num) {
  for (var i = 0; i < num; i++) {
    console.log(i + " " + text);
  }
};

echo("Echo!!!", 10);
echo("Tater Tots", 3);
