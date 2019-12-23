// // // // // //  function layerTopRight(matrix) {

// // // // // // //   // remove and store the first row from matrix
// // // // // //   var top = matrix.splice(0, 1);

// // // // // // //   // store the right column of the matrix
// // // // // //  var right = [];

// // // // // // //   // remove the last column from the matrix
// // // // // //    for (var i = 0; i < matrix.length; i++) {
// // // // // //   var e = matrix[i].splice(-1, 1);
// // // // // //   right.push(e);
// // // // // //    }

// // // // // // //   // return the top row and last column elements as a list
// // // // // //   return top.concat(right).toString().split();

// // // // // // }

// // // // // // function layerBottomLeft(matrix) {

// // // // // // //   // remove and store the last row from matrix in reverse order
// // // // // //    var bottom = matrix.splice(matrix.length-1, 1)[0].reverse();

// // // // // // //   // store the left column of the matrix
// // // // // //    var left = [];

// // // // // // //   // remove the first column from the matrix
// // // // // //    for (var i = 0; i < matrix.length; i++) {
// // // // // //    var e = matrix[i].splice(0, 1);
// // // // // //    left.push(e);
// // // // // //    }

// // // // // // //   // return the top row and last column elements as a list
// // // // // //   return bottom.concat(left.reverse()).toString().split();

// // // // // // // }

// // // // // // // our main spiral function that will
// // // // // // // return a final spiral ordered list
// // // // // // function spiral(matrix) {

// // // // // //   // where we store our final spiraled list
// // // // // //   var spir = [];

// // // // // //   while (matrix.length > 0) {

// // // // // //     // if only 1 more element left in matrix
// // // // // //     if (matrix.length === 1) {
// // // // // //       spir.push(matrix[0]);
// // // // // //       break;
// // // // // //     }

// // // // // //     // return the spiraled list of the top row and
// // // // // //     // right column for this matrix
// // // // // //     var tr = layerTopRight(matrix);
// // // // // //     spir.push(tr);

// // // // // //     // return the spiraled list of the bottom row and
// // // // // //     // left column for this matrix
// // // // // //     var bl = layerBottomLeft(matrix);
// // // // // //     spir.push(bl);

// // // // // //   }

// // // // // //   return spir.toString().split();

// // // // // // }
// // // // // // }
// // // // // // // setup a matrix
// // // // // // var M = [[1, 2, 3],
// // // // // //          [4, 5, 6],
// // // // // //          [7, 8, 9]];

// // // // // // // return it in spiral order
// // // // // // spiral(M);

// // // // // // console.log(M);

// // // // // // -------------------

// // // // // function spiral(matrix) {
// // // // //   var list = [];

// // // // //   while (matrix.length > 1) {
// // // // //     //Right
// // // // //     list = list.concat(matrix.splice(0, 1)[0]);

// // // // //     //Down
// // // // //     for (var idx in matrix) {
// // // // //       list.push(matrix[idx].splice(-1)[0]);
// // // // //     }

// // // // //     //Left
// // // // //     list = list.concat(matrix.splice(-1, 1)[0].reverse());

// // // // //     //Up
// // // // //     for (var idx = matrix.length - 1; idx >= 0; idx--) {
// // // // //       list.push(matrix[idx].splice(0, 1)[0]);
// // // // //     }
// // // // //   }

// // // // //   if (matrix.length > 0) {
// // // // //     list.push(matrix.pop()[0]);
// // // // //   }

// // // // //   return list;

// // // // // }

// // // // // // setup a matrix
// // // // // var M = [
// // // // //   [1, 2, 3],
// // // // //   [4, 5, 6],
// // // // //   [7, 8, 9]
// // // // // ];

// // // // // // return it in spiral order
// // // // // spiral(M);

// // // // function generateMatrix(n) {
// // // //   var total = n*n;
// // // //   var result= [];

// // // //   for(var i=0;i<n;i++) {
// // // //       var rs = [];
// // // //       for(var j=0;j<n;j++) {
// // // //           rs.push(0);
// // // //       }
// // // //       result.push(rs);
// // // //   }

// // // //   var x=0;
// // // //   var y=0;
// // // //   var step = 0;
// // // //   for(var i=0;i<total;){
// // // //       while(y+step<n){
// // // //           i++;
// // // //           result[x][y]=i;
// // // //           y++;

// // // //       }
// // // //       y--;
// // // //       x++;

// // // //       while(x+step<n){
// // // //           i++;
// // // //           result[x][y]=i;
// // // //           x++;
// // // //       }
// // // //       x--;
// // // //       y--;

// // // //       while(y>=step){
// // // //           i++;
// // // //           result[x][y]=i;
// // // //           y--;
// // // //       }
// // // //       y++;
// // // //       x--;
// // // //       step++;

// // // //       while(x>=step){
// // // //           i++;
// // // //           result[x][y]=i;
// // // //           x--;
// // // //       }
// // // //       x++;
// // // //       y++;
// // // //   }
// // // //   return result;
// // // //   let n = [
// // // //     [0, 1, 2, 3, 4],
// // // //     [5, 6, 7, 8, 9],
// // // //     [10, 11, 12, 13, 14],
// // // //     [15, 16, 17, 18, 19],
// // // //     [20, 21, 22, 23, 24]
// // // //   ];
// // // //   spiral(n);
// // // //   console.log(result);
// // // // }

// // // // var matrix1 = [
// // // //   [1, 2, 3],
// // // //   [4, 5, 6],
// // // //   [7, 8, 9]
// // // // ]
// // // // // Expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]
// // // // console.log(spiral_traversal(matrix1));

// // // var matrix1 = [
// // //   [1, 2, 3],
// // //   [4, 5, 6],
// // //   [7, 8, 9]
// // // ];

// // // // Prints: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// // // console.log(spiral_traversal(matrix1));

// // // function spiral(param1) {
// // //   const arr = [];
// // //   let num = 0;
// // //   for (let i = 0; i < param1; i++) {
// // //     arr[i] = [];
// // //     for (let j = 0; j < param1; j++) {
// // //       arr[i][j] = num;
// // //       num++;
// // //     }
// // //   }
// // //   // Multidimension Array 2D
// // //   // [
// // //   //   [0, 1, 2, 3, 4],
// // //   //   [5, 6, 7, 8, 9],
// // //   //   [10, 11, 12, 13, 14],
// // //   //   [15, 16, 17, 18, 19],
// // //   //   [20, 21, 22, 23, 24]
// // //   // ];

// // //   const result = [];
// // //   let start = 0;
// // //   let end = param1 - 1;
// // //   let number = 1;

// // //   while (result.length < param1 * param1) {
// // //     //atas ke kanan
// // //     for (let k = start; k < arr.length; k++) {
// // //       result.push(arr[start][k]);
// // //     }
// // //     //kanan ke bawah
// // //     for (let l = number; l < arr.length - 1; l++) {
// // //       result.push(arr[l][end]);
// // //     }
// // //     //bawah ke kiri
// // //     for (let m = arr.length - 1; m > start; m--) {
// // //       result.push(arr[end][m]);
// // //     }
// // //     //kiri ke atas
// // //     for (let n = arr.length - 1; n >= number; n--) {
// // //       result.push(arr[n][start]);
// // //     }
// // //     start++;
// // //     number++;
// // //     end--;
// // //     arr.length--;
// // //   }
// // //   console.log(result);
// // // }
// // // spiral(5);
// // // spiral(6);
// // // spiral(7);

function spiral(param1){
// // //     let arr = []
// // //     let result = newArray(n).fill().map(() => newArray(n).fill(''));
// // //     let counter = 0;
// // //     let startCol = 1;
// // //     let endCol = param1 - 1;
// // //     let startRow = 0;
// // //     let endRow = param1 - 1;

// // //     while (startCol <= endCol && startRow <= endRow) {
// // //         for (let i = startCol; i <= endCol; i++) {
// // //             result[startRow][i] = counter;
// // //             counter++;
// // //         }
// // //         startRow++;
// // //         for (let j = startRow; j <= endRow; j++) {
// // //             result[j][endCol] = counter;
// // //             counter++;
// // //         }

// // //         endCol--;

// // //         for (let i = endCol; i >= startCol; i--) {
// // //             result[endRow][i] = counter;
// // //             counter++;
// // //         }

// // //         endRow--;
// // //         for (let i = endRow; i >= startRow; i--) {
// // //             result[i][startCol] = counter;
// // //             counter++;
// // //         }

// // //         startCol++;

// // //     }
// // //      console.log(result);
// // // }
// // // spiral(5);
// // // spiral(6);
// // // spiral(7);

// // const matrix = n => {
// //   const results = [];
// //   for (let i = 0; i < n; i++) {
// //     results.push([]);
// //   }

// // //   spiral5 :
// //     [
// //     0, 1, 2, 3, 4],
// //     [5, 6, 7, 8, 9],
// //     [10, 11, 12, 13, 14],
// //     [15, 16, 17, 18, 19],
// //     [20, 21, 22, 23, 24]
    ;

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--; // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--; // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  console.log(result);
}
 spiral(5);
// spiral(6);
// spiral(7);

// var array = [
//     [1,  2,  3,   4],
//     [5,  6,  7,   8],
//     [9,  10, 11,  12],
//     [13, 14, 15,  16]
// ];

// var n = array.length;

// //create empty 2d array

// var startRow = 0;
// var endRow = n - 1;
// var startColumn = 0;
// var endColumn = n - 1
// var newArray = [];

// // While loop is used to spiral into the 2d array.
// while(startRow <= endRow && startColumn <= endColumn) {

//     // Reading top row, from left to right
//     for(var i = startColumn; i <= endColumn; i++) {
//         newArray.push(array[startColumn][i]);
//     }
//     startRow++; // Top row read.

//     // Reading right column from top right to bottom right
//     for(var i = startRow; i <= endRow; i++) {
//         newArray.push(array[i][endColumn]);
//     }
//     endColumn--; // Right column read

//     // Reading bottom row, from bottom right to bottom left
//     for(var i = endColumn; i >= startColumn; i--) {
//         newArray.push(array[endRow][i]);
//     }
//     endRow--; // Bottom row read

//     // Reading left column, from bottom left to top left
//     for(var i = endRow; i >= startRow; i--) {
//         newArray.push(array[i][startColumn]);
//     }
//     startColumn++; // left column now read.

// } // While loop will now spiral in the matrix.

// console.log(newArray)

// function spiral(param1) {
//   let arr = [];
//   let num = 0;
//   for (let i = 0; i < param1; i++) {
//     arr[i] = [];
//     for (let j = 0; j < param1; j++) {
//       arr[i][j] = num;
//       num++;
//     }
//   }

//   let result = [];
//   let start = 0;
//   let end = param1 - 1;
//   let number = 1;

//   while (result.length < param1 * param1) {
//     // start to right
//     for (let k = start; k < arr.length; k++) {
//       result.push(arr[start][k]);
//     }
//     // right to end
//     for (let l = number; l < arr.length - 1; l) {
//       result.push(arr[l][end]);
//     }
//     // end to left
//     for (let m = arr.length - 1; m > start; m--) {
//       result.push(arr[end][m]);
//     }
//     // left to up
//     for (let n = arr.length - 1; n >= number; n--) {
//       result.push(arr[n][start]);
//     }
//     start++;
//     number++;
//     end--;
//     arr.length--;
//   }
//   console.loh(result);
// }
// spiral(5);
// spiral(6);
// spiral(7);
