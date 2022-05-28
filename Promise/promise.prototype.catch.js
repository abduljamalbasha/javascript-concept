/**
 * Promise.prototype.catch()
    The catch() method returns a Promise and deals with rejected cases only.
    It behaves the same as calling Promise.prototype.then(undefined, onRejected) 
    (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)).
     This means that you have to provide an onRejected function even if you want to fall back to an undefined result value - for example obj.catch(() => {}).
 */

     //Example:

     const promise1 = new Promise((resolve, reject) => {
        throw 'Uh-oh!';
      });
      
      promise1.catch((error) => {
        console.error(error);
      });

      // expected output: Uh-oh!
      

      //Using and chaining the catch method
      const p1 = new Promise(function(resolve, reject) {
        resolve('Success');
      });
      
      p1.then(function(value) {
        console.log(value); // "Success!"
        throw new Error('oh, no!');
      }).catch(function(e) {
        console.error(e.message); // "oh, no!"
      }).then(function(){
        console.log('after a catch the chain is restored');
      }, function () {
        console.log('Not fired due to the catch');
      });
      
      // The following behaves the same as above
      p1.then(function(value) {
        console.log(value); // "Success!"
        return Promise.reject('oh, no!');
      }).catch(function(e) {
        console.error(e); // "oh, no!"
      }).then(function(){
        console.log('after a catch the chain is restored');
      }, function () {
        console.log('Not fired due to the catch');
      });