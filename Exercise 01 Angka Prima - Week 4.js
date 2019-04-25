function angkaPrima(angka) {

  if(angka < 2){
    return false
  }
  for(var i = 2; i < angka; i++){
      if (angka % i === 0){
        return false
      }
    }
    return true
  }

//atau

function angkaPrima(angka) {
     if(angka < 2){
        return false
      }
    var isPrima = true;
    var counter = 2;
    while(isPrima && counter<angka){
        if(angka%counter === 0 ){
            isPrima = false;
        }
        counter++;
    }
    return isPrima;
}

// atau

function angkaPrima(angka) {
  if(angka < 2){
    return false
  }
  i = 2;
  while(i < angka){
    if(angka%i === 0){
      return false
    }
    i++
  }
  return true
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
