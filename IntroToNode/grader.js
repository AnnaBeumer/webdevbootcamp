function average(txt, arr) {
  var totaal = 0;
  for (var i = 0; i < arr.length; i++) {
    totaal += arr[i];
    // console.log(arr[i]);
  }
  //   totaal / arr.length
  console.log(txt + " " + Math.round(totaal / arr.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average("scores", scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average("scores2", scores2);
