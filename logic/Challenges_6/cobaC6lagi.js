function sentencesManipulation(sentences){
let kata= ["ibu", "pergi", "ke", "pasar", "bersama", "aku"];
kata.forEach((sentences) =>{ 
})
// console.log(kata);

let kata1 = "";
for(i=0;i<kata.length;i++){
if('aiueo'.includes(kata[1][0])){
kata1 += kata[i]+' ';
} else {
kata1 += kata[i].substring(1)+kata[i][0]+ "nyo ";
}
}
console.log(kata1);
}
sentencesManipulation("ibu pergi ke pasar bersama aku");


