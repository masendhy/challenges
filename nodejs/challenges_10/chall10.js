const sentencesManipulation = sentences => {
  let newKata = "";
  let kata = sentences.split(" ", sentences.length);

  for (i = 0; i < kata.length; i++) {
    if ("aiueo".includes(kata[i][0])) {
      newKata += kata[i] + " ";
    } else {
      newKata += kata[i].substring(1) + kata[i][0] + "nyo ";
    }
  }
  return newKata;
};

sentencesManipulation("ibu pergi ke pasar bersama aku");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "tulis kalimatmu disini>"
});
rl.prompt();
rl.on("line", answer => {
  console.log("hasil konversi:" + sentencesManipulation(answer));

  rl.prompt();
}).on("close", () => {
  console.log("Good Bye !");
  process.exit(0);
});
