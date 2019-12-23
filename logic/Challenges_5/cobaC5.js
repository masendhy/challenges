function stringManipulation(word){
  if ("aiueo".includes(word[0])){
    console.log(word)
  } else {
    let newWord = word.slice(1, word.length).concat(word[0], "nyo");
    console.log(newWord)
  }
}

stringManipulation("ayam");
stringManipulation("bebek");
