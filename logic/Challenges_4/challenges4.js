function cariPrima(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}
function indexPrima(Param1) {
  let result = [];
  for (let j = 2 ; result.length < Param1;j++) {
    if (cariPrima(j)) {
      result.push(j);
    }
    
  }
  return result.pop(Param1);
}

console.log(indexPrima(4));
console.log(indexPrima(500));
console.log(indexPrima(37786));
