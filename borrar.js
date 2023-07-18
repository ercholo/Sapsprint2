let promiseResolve;
let promiseReject;

function execShellCommand(cmd) {
    const exec = require('child_process').exec;
    let promise =  new Promise((resolve, reject) => {
    promiseResolve = resolve;
    promiseReject = reject;   
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
       console.warn(error);
      }
      resolve(stdout? stdout : stderr);
     });
    });
   }



   const javaInfo = promiseResolve.then(execShellCommand('java -version'));
console.log(javaInfo);