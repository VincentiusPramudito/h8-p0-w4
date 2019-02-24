function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var start = 0;
  var finish = 0;
  var result = [];
  var distance = [];
  var biaya = 0;
  for(var i = 0; i < arrPenumpang.length; i++){
    for(var j = 0; j < rute.length; j++){
      if(arrPenumpang[i][1] === rute[j]){
        start = j
      }else if(arrPenumpang[i][2] === rute[j]){
        finish = j
      }
    }
    distance = Math.abs(finish - start)
    biaya = 2000 * distance
    var ticket = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: biaya
    }
    result.push(ticket);
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
