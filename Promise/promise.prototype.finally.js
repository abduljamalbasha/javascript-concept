/**
 * Promise.prototype.finally()
 * 
 * The finally() method returns a Promise.
 *  When the promise is finally either fulfilled or rejected,
 *  the specified callback function is executed.
 *  This provides a way for code to be run whether the promise was fulfilled successfully, or instead rejected.

    This helps to avoid duplicating code in both the promise's then() and catch() handlers.
 */


    function checkMail() {
        return new Promise((resolve,reject)=>{
                const randomNum = Math.random()
                console.log("randomNum:",randomNum)
                if(randomNum > 0.5){
                    resolve('Mail has arrived')
                }else{
                    reject(new Error('Failed to arrived'))
                }
        });
      }
      
      checkMail()
      .then((mail)=>{
        console.log("mail:",mail)
      }).catch((err)=>{
        console.log("err:",err)
      }).finally(()=>{
          console.log("executing finally block chain")
      });

// Expected Output:
    // randomNum: 0.5921261415562336
    // mail: Mail has arrived
    // executing finally block chain
    // abduljamalbasha@AGLS-MLT-406 Promise % node promise.prototype.finally.js
    // randomNum: 0.5045321191362662
    // mail: Mail has arrived
    // executing finally block chain