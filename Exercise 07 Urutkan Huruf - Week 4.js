function urutkanAbjad(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var output = [];
  var result = '';
  for(i = 0; i < str.length; i++){
    for(j = 0; j < alphabet.length; j++){
      if(str[i]===alphabet[j]){
        output.push(j)
        output.sort(function(value1, value2) { return value1 > value2 });
      }
    }
  }
  for(k = 0; k < output.length; k++){
    result += alphabet[output[k]]
  }
  return result
}



//OR

//function urutkanAbjad(str) {
//  var spread = str.split('');
//  var sorting = spread.sort();
//  var regroup = sorting.join('');
//  return regroup
//}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
