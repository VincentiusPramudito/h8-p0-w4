function checkAB(num) {
  var hurufA;
  var hurufB;
  for (i = 0; i < num.length; i++){
    if(num[i] === 'a'){
      hurufA = i
      // console.log(hurufA)
    }
    else if(num[i] === 'b'){
      hurufB = i
      // console.log(hurufB)
    }
  }
  return hurufA - hurufB === 4 || hurufB - hurufA === 4
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
