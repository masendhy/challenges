function deretKaskus(n) {
  var arr = [];
  var startBilangan = 0;
  for (i = 0; i < n; i++) {
    startBilangan += 3;
    if (startBilangan % 5 === 0 && startBilangan % 6 === 0) {
      arr.push("KASKUS");
    } else if (startBilangan % 6 === 0) {
      arr.push("KUS");
    } else if (startBilangan % 5 === 0) {
      arr.push("KAS");
    } else {
      arr.push(startBilangan);
    }
  }
  return arr;
}
console.log(deretKaskus(10));
