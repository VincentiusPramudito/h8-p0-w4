function angkaPrima(angka) {
  // dipilih angka 2 karena angka 0 jika dibagi bilangan tidak terdefinisi, dan jika dibagi 1 semua bilangan habis dibagi 1
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
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
