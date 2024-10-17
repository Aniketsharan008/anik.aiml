//function rollnumber(num,delay,nextroll){
  //  settimeout(() => {
    //    console.log("roll number is",num);
      //  if(nextroll)nextroll();
    //},delay);
    //}
    //rollnumber(12121, 1000,() => {
      //  rollnumber(12312, 2000,() => {
        //     rollnumber(12412, 3000,() => {
          //      rollnumber(12512, 4000);

        //});
    //});
//});
//----------------promise---------
const promise =new Promise((resolve, reject) => {
    
    resolve("promise resolved");
    reject("promise Rejected");

});
promise.then(() => {
    console.log("this is my promise");

}).catch(()=>{
    console.log("this is my error page")
})