// function sum(){
//   let i ;
//   let sum = 0 ;

//   for ( i=0;i<arguments.length;i++){
//     sum += arguments [i];
//   }
//   console.log(sum);
// }

// sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

// function deretKaskus (n){
// let arr = [];
// let startBil = 0 ;

// for ( i = 0; i < n ; i++){
//   startBil += 3;
//   if ( startBil % 5 === 0 && startBil % 6 === 0){
//     arr.push('KASKUS');
//   } else if ( startBil % 6 === 0){
//     arr.push('KAS');
//   }else if ( startBil % 5 === 0){
//     arr.push('KUS');
//   } else{
//     arr.push(startBil);
//   }

// }
// return arr;
// }
// console.log(deretKaskus(10));

// function romawi (n){
//    let angka = [ 1000,900,500,400,100,90,50,40,10,9,5,4,1]
//    let roma = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
//    let hasil = ""

//    for ( let data = 0; data < angka.length ; data++ ){
//      while (angka[data] <= n){
//        hasil += roma[data];
//        n -= angka[data];
//      }
//    }
//    return hasil;
// }

// console.log('Script Testing Romawi\n');
// console.log(' input | expected | result ');
// console.log(' ----- | -------- | ------ ');
// console.log(' 4     | IV       | ', romawi(4));
// console.log(' 9     | IX       | ', romawi(9));
// console.log(' 13    | XII      | ', romawi(13));
// console.log(' 1453  | MCDLIII  | ', romawi(1453));
// console.log(' 1646  | MDCXLVI  | ', romawi(1646));

// function checkPrime (n){
//     for ( let i = 2; i < n ; i++){
//       if ( n % i === 0){
//         return false ;
//       }
//     }
//     return true
//     }

// function indexPrime(param1){
//   let result = [];
//   for ( let j = 2 ; result.length < param1 ; j++ ){
//     if ( checkPrime(j)){
//       result.push(j);
//     }
//   }
//   return result.pop(param1);
// }
//    console.log(indexPrime(4));
//    console.log(indexPrime(500));
//    console.log(indexPrime(37786));

// C11

// const fs = require('fs');
// const readline = require('readline');

// const file = fs.readFileSync('./data.json');
// const data = JSON.parse(file);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'Tebakan: '
// });

// console.log(
//   'Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar!\n'
// );

// let count = 0;

// console.log(`Pertanyaan: ${data[count].definition}`);
// rl.prompt();

// rl.on('line', line => {
//   if (count < data.length - 1) {
//     if (line.toLowerCase() !== data[count].term) {
//       console.log('Wkwkwk, Anda kurang beruntung!\n');
//       rl.prompt();
//     } else {
//       count++;
//       console.log('Selamat Anda benar!\n');
//       console.log(`Pertanyaan: ${data[count].definition}`);
//       rl.prompt();
//     }
//   } else {
//     if (line.toLowerCase() !== data[count].term) {
//       console.log('Wkwkwk, Anda kurang beruntung!\n');
//       rl.prompt();
//     } else {
//       console.log('Selamat Anda benar!\n');
//       console.log('Hore Anda Menang!');
//       process.exit(0);
//     }
//   }
// });


console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!');
const fs = require('fs');
const readline = require('readline');
const fileStream = fs.readFileSync('data.json');

const obj = JSON.parse(fileStream);
var num = 0;
console.log(`Pertanyaan : ${obj[num].definition}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan  : '
});
rl.prompt()
rl.on('line', world => {
    if (world.toLowerCase() == obj[num].term.toLowerCase()) {
        console.log('Selamat Anda Benar!');
        num++;
        if (num == obj.length) {
            console.log('Hore Anda Menang!');
            rl.close();
        }
        console.log(`Pertanyaan : ${obj[num].definition}`);
    } else {
        console.log('Wkwkwk, Anda Kurang Beruntung');
    }

    rl.prompt();

}).on('close', () => {
    console.log('');
    process.exit(0);
});