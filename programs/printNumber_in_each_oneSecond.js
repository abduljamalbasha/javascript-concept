const printNumbersForEvery2Sec = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 1000)
      }
  }
  printNumbersForEvery1Sec(10);