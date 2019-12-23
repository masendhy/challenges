// function weirdMultiply (sentence) {
//   var hasil = 1;
//   strAngka = sentence.toString();
// if (strAngka.length == 1) {
//   hasil = parseInt (strAngka);
//   return hasil
// }

// else {
//   for (let i = 0; i < strAngka.length; i++) {
//     hasil *= parseInt((strAngka.charAt(i)));
//   }
//   return weirdMultiply(hasil);
// }

// }

// function weirdMultiply (sentence){
//   const i = sentence.toString().split('');
//     if (i.length === 1) {
//     return sentence;
//     }
//   output = i.reduce((a,b) => a*b);
//   return weirdMultiply (output);
// }

function weirdMultiply(sentences) {
  let hasil = 1;
  let string = sentences.toString().split("");
  if (string.length === 1) {
    return sentences;
  }
  hasil = string.reduce((a, b) => a * b);
  return weirdMultiply(hasil);
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
