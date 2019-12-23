function weirdMultiply(sentences) {
  let hasil = 1;
  let str = sentences.toString().split("");

  // console.log(str);

  for (let i = 0; i < str.length; i++) {
    hasil *= parseInt(str[i]);
    if (str.length == 1) {
      return sentences;
    }
  }

  return weirdMultiply(hasil);
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
