function checkAB(num) {
  var cekA = [];
  var cekB = [];

  for(var i = 0; i < num.length; i++){
    if(num[i] === 'a'){
      cekA.push(i)
    }else if(num[i] === 'b'){
      cekB.push(i)
    }
  }
  console.log(cekA, cekB)

  for(var j = 0; j < cekA.length; j++){
    for(var k = 0; k < cekB.length; k++){
      var count = Math.abs(cekA[j] - cekB[k])
      if(count === 4){
        return true
      }
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
