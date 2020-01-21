console.log(
  "Selamat Datang di Permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya !"
);

let fs = require("fs");
let file = fs.readFileSync("fileData.json");
let data = JSON.parse(file);
let num = 0;
console.log(`Pertanyaan :${data[num].definition}`);
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: " Tebakan :"
});

rl.prompt();
rl.on("line", word => {
  if (word.toLowerCase() === data[num].term.toLowerCase()) {
    console.log("Selamat Anda Benar..!");
    num++;
    if (num === data.length) {
      console.log("Horeee Anda Menang !");
      rl.close();
    }
    console.log(`Pertanyaan : ${data[num].definition}`);
  } else {
    console.log("wkwkwk, Anda Kurang Beruntung");
  }
  rl.prompt();
}).on("close", () => {
  console.log("");
  process.exit(0);
});
