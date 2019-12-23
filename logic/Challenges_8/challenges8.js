function pola(str) {
  let hasil = [];
  let arr = str.split(" ");

  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 9; y++) {
      if (
        parseInt(arr[0].replace(/#/, x)) * parseInt(arr[2]) ===
        parseInt(arr[4].replace(/#/, y))
      ) {
        hasil.push(x, y);
      }
    }
  }
  return hasil;
}
console.log(pola("42#3 * 188 = 80#204"));
// result = [8,5]
console.log(pola("8#61 * 895 = 78410#5"));
// result = [7,9]
