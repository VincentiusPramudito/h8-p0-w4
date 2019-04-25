function ubahHuruf(kata) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var word = '';

  for (var i = 0; i < kata.length; i++){
    for (var j = 0; j < alphabet.length; j++){
      if (kata[i] === alphabet[j]){
        var counter = j + 1;
        if(j === alphabet.length -1){
          counter = 0;
        }
        word = word + alphabet[counter];
      }
    }
  }
  return word;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
