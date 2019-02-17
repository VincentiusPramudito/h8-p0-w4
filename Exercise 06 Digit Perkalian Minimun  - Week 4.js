function cariModus(arr) {
var mostRepeat = 0;
var modus = 0;
  var repeatNumber = 0;
  for (var i = 0; i < arr.length; i++){
    var counter = 0;
    for(var j = 0; j < arr.length; j++){
      // console.log('index i ke ',i, ',index j ke ',j, 'dengan arr[i], ',arr[j], 'dan arr[j] ',arr[j])
      if ( arr[i] === arr[j] && i !== j){
        counter++;
        if(counter > mostRepeat){
          mostRepeat = counter
          modus = i
        }
      }
    }
  }
  if (mostRepeat === 0){
    return -1
  }
  var num = 0;
  for (var k = 0; k < arr.length; k++){
    num = num + arr[k]
      // console.log(arr[k])
    if (num/arr.length === arr[k]){
      return -1;
    }
  }
  return arr[modus]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
