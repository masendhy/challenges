function sentencesManipulation(sentences) {
  let kata1 = "";
  let kata = sentences.split(" ", sentences.length);

  for (i = 0; i < kata.length; i++) {
    if ("aiueo".includes(kata[i][0])) {
      kata1 += kata[i] + " ";
    } else {
      kata1 += kata[i].substring(1).concat(kata[i][0],'nyo ');
    }
  }
  console.log(kata1);
}

sentencesManipulation("ibu pergi ke pasar bersama aku");

//ibu ergipnyo eknyo asarpnyo ersamabnyo aku
