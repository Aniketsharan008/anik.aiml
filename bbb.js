function rollnumber(num,delay,nextroll){
    return new promise((resolve,reject)=>){
      settimeout(() => {
          console.log("roll number is",num);
          resolve("suscessfully done");
          
      },delay);
      });
    }
      getroll(1, 1000,() => {
          getroll(2, 2000,() => {
               rollnumber(3, 3000); 
                  
  
          });
      });
  