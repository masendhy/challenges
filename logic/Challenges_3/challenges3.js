function romawi(n) {
  var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var awal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var hasil = ""

  for (var data = 0; data < angka.length; data++) {
      while (angka[data] <= n) {
          hasil += awal[data];
          n -= angka[data];
      }
  }
  return hasil;
}

console.log('Script Testing Romawi\n');
console.log(' input | expected | result ');
console.log(' ----- | -------- | ------ ');
console.log(' 4     | IV       | ', romawi(4));
console.log(' 9     | IX       | ', romawi(9));
console.log(' 13    | XII      | ', romawi(13));
console.log(' 1453  | MCDLIII  | ', romawi(1453));
console.log(' 1646  | MDCXLVI  | ', romawi(1646));
