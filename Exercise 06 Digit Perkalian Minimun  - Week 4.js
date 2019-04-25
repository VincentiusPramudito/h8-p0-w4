function digitPerkalianMinimum(angka) {

  var arr = [];
  var digit = Math.sqrt(angka)

  for (var i = 1; i <= digit; i++){
    var str = ''
    if (angka%i===0){
      str = str + i;
      str = str + angka/i;
      arr.push(str);
    }
  }
  return arr[arr.length-1].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
