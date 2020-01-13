function spiral(param1) {
  let arr = [];
  let num = 0;
  for (let i = 0; i < param1; i++) {
    arr[i] = [];
    for (let j = 0; j < param1; j++) {
      arr[i][j] = num;
      num++;
    }
  }

  let result = [];
  let start = 0;
  let end = param1 - 1;
  let number = 1;

  while (result.length < param1 * param1) {
    // atas ke kanan
    for (let x = start; x < arr.length; x++) {
      result.push(arr[start][x]);
    }
    // kanan ke bawah
    for (let y = number; y < arr.length - 1; y++) {
      result.push(arr[y][end]);
    }
    // bawah ke kiri
    for (let z = arr.length - 1; z > start; z--) {
      result.push(arr[end][z]);
    }
    // kiri ke atas
    for (let w = arr.length - 1; w >= number; w--) {
      result.push(arr[w][start]);
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
