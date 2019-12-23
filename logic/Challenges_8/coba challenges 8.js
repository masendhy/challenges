// function pola(str){
//     const result = [];
//     let arr = str.split(' ');

//     for(let i = 0; i <= 9; i++){
//         for (let j = 0; j <= 9; j++){

//             if(parseInt(arr[0].replace(/#/, i)) * parseInt(arr[2]) === parseInt(arr[4].replace(/#/, j))){
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// }

// console.log(pola('42#3 * 188 = 80#204'));
// console.log(pola("8#61 * 895 = 78410#5"));