function spiral(param1) {
   let arr = [];
   let num = 0
   for (let i = 0;i<param1;i++){
     arr[i]=[];
     for (let j = 0;j<param1;j++){
       arr[i][j]=num;
      num++     }
   }


// let arr = [
//   [0, 1, 2, 3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12, 13, 14],
//   [15, 16, 17, 18, 19],
//   [20, 21, 22, 23, 24]
// ];

let result = [];
let start = 0;
let end = param1 - 1;
let number = 1

while ( result.length<param1*param1){
  for (let k = start;k<arr.length;k++){
    result.push(arr[start][k]);
     }
     for (let l = number; l < arr.length-1;l++){
       result.push(arr[l][end]);
     }
     for (let m = arr.length -1;m>start;m--){
       result.push(arr[end][m]);
     }for (let n = arr.length - 1 ; n>= number;n--){
       result.push(arr[n][start]);
     }
     start++;
     number++;
     end--;
     arr.length--;
}

console.log(result);
}
spiral(5);
spiral(6);
spiral(7);
