const { exec } = require('child_process');
const regex = /\d+$/g;


const trabajos = (printer) =>{

    return new Promise((resolve, reject) => {
       
        exec(`cscript prnjobs.vbs -l -p ${printer}`, {cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr)=> {
            
            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

             //result es el array que tiene los trabajos en cola cuando la impresora es llamada
            const result = stdout.replace(/\r\n/g, '').match(regex);
            
            //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
            if (parseInt(result[0]) > 500) { 
                resolve("+500");
            }; 
            
            resolve(result[0]);
        });
        
    });
    
};


module.exports = trabajos;