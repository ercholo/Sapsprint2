const { exec } = require('child_process');
const res = require('express/lib/response');
const regex = /\d+$/g;
let promiseResolve;
let promiseReject;

// const trabajos = (printer) =>{

//     exec(`cscript prnjobs.vbs -l -p ${printer}`, {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
//     // exec(`cscript prnjobs.vbs -l`, {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
        
//         //Si hay errores, que los muestre
//         if (error) {
//             console.log(stdout);
//             console.log(stderr);
//             return;
//         };

//         //result es el array que tiene los trabajos en cola cuando la impresora es llamada
//         const result = stdout.replace(/\r\n/g, '').match(regex);
        
//         //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
//         if (parseInt(result[0]) > 500) { 
//             return "+500";
//         }; 
        
//         console.log(result[0]);
//         return result;
        
//     });
    
// }


const trabajos = (printer) =>{

    let promise =  new Promise((resolve, reject) => {

        promiseResolve = resolve;
        promiseReject = reject;   
            exec(`cscript prnjobs.vbs -l -p ${printer}`, {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
            // exec(`cscript prnjobs.vbs -l`, {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
                
                //Si hay errores, que los muestre
                if (error) {
                    console.log(stdout);
                    console.log(stderr);
                    reject();
                };
                
                const result = stdout.replace(/\r\n/g, '').match(regex);
                
                //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
                if (parseInt(result[0]) > 500) { 
                    resolve("+500");
                }; 
                
                //result es el array que tiene los trabajos en cola cuando la impresora es llamada
                console.log(result[0]);
                resolve(result);
                
            });
        return promiseResolve;
    });

};

const resultInfo = promiseResolve.then(trabajos('local'))
console.log(resultInfo)

module.exports = trabajos;